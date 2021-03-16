const fs = require('fs')
const path = require('path')
const transformations = require('./transformations')
const config = require('./netlify-cms-config')

// we'll look for any `.json` files in the `input` folder, then output to a single json file
// [
//   {
//     inputDirectory: 'public/data/posts',
//     outputFile: 'public/data/posts.json'
//   }
// ]
const scanDirectories = config.collections
  .filter(collection => collection.extension === 'json')
  .map(collection => ({
    inputDirectory: collection.folder,
    outputFile: `${collection.folder}.json`,
    sortBy: collection.sort_by
  }))

console.log('BUILD JSON DATA')
scanDirectories.forEach(processFiles)

// finds all json files in directory, processes to markdown, updates original file, updates output file
function processFiles({ inputDirectory, outputFile, sortBy }) {
  const postsDirectory = path.join(process.cwd(), inputDirectory)
  const filenames = fs.readdirSync(postsDirectory)
  
  Promise.all(filenames.map(async (filename) => {
    // only allow .json files
    if (!filename.endsWith('.json')) {
      return false
    }
  
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(fileContents)
  
    // parse / transform any contents
    transformations.transform(jsonData)

    // write transformations back to original file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2))
  
    return jsonData
  })).then(results => {
    const posts = results.filter(Boolean)

    // sort
    posts.sort({
      date: (a, b) => new Date(b.date) - new Date(a.date),
    }[sortBy] || Boolean)
    
    const outputPath = path.join(process.cwd(), outputFile)
    fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2))
    
    console.log([inputDirectory, outputFile].join(' -> '), posts.length)
  })
}
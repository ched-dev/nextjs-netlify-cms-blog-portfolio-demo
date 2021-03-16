const remark = require('remark')
const html = require('remark-html')

module.exports = {
  transform: async (data) => {
    // convert body from markdown to HTML
    if (data.body) {
      data.bodyHtml = (await remark().use(html).process(data.body)).toString()
    }
    // convert date to a human readable format
    if (data.date) {
      data.dateFormatted = (new Date(data.date)).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
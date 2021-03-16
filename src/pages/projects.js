import Page from 'src/components/Page'

export default function Projects({ repos = [] }) {
  return (
    <Page title="Projects">
      <h1 className="title">🛠 Projects</h1>
      <section className="grid-two-column">
      {repos.map(repo => (
        <div key={repo.id} className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{repo.name}</strong> <small>{repo.language}</small>
                  <br />
                  {repo.description || <em>No Description</em>}
                </p>
                <p>
                  <a href={repo.html_url} className="button is-text" target="_blank" rel="noopener noreferrer">View on Github</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
      </section>
    </Page>
  )
}

// runs at build time only
export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/ched-dev/repos`)
  const result = await response.json()

  result.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))

  return {
    props: {
      // will be passed to the page component as props
      repos: result.filter(repo => !repo.fork).slice(0, 10)
    },
  }
}
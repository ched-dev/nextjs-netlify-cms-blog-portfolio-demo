import Link from 'next/link'
import Page from 'src/components/Page'
import posts from 'public/data/posts.json'

export default function Blog({ posts = [] }) {
  return (
    <Page title="Blog">
      <h1 className="title">📓 Blog</h1>
      {posts.map(post => (
        <div key={post.slug} className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <a>
                    <h2 className="title">{post.title}</h2>
                    <em className="subtitle is-6 is-block">{post.dateFormatted}</em>
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts
    }
  }
}
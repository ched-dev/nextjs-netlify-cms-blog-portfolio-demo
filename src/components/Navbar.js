import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="https://avatars.githubusercontent.com/u/17879520?s=460&u=7147b10e4f2766c676bef9960c6f30fc3ca67fc8&v=4" className="navbar-logo" />
          </a>
        </Link>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/projects">
            <a className="navbar-item">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className="navbar-item">
              Blog
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
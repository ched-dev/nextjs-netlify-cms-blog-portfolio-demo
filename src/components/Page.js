import Head from 'next/head'
import Navbar from './Navbar'

export default function Page({ title = '', children = [] }) {
  return (
    <main className="container">
      <Head>
        <title>{title ? title + ' | ' : '' }Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="main-content">
        {children}
      </main>

      <footer className="mb-6">
        &copy; {(new Date()).getFullYear()}
      </footer>
    </main>
  )
}

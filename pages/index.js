import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JDevter 🐦</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href='https://nextjs.org'>jdevter</a>
        </h1>
        <nav className={styles.nav}>
          <Link href='/timeline'>
            <a>timeline</a>
          </Link>
        </nav>
      </main>
      <style jsx>{``}</style>
    </div>
  )
}

// https://github.com/Jonatandb/curso-nextjs-twitter-clone
// https://youtu.be/2jxc8DMzt0I

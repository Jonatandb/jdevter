import Head from 'next/head'
import styles from './Index.module.css'
import AppLayout from '../components/AppLayout/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jdevter 🐦</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <section>
          <img src='/Jdevter_logo.png' alt='Jdevter main logo' />
          <h1>Jdevter</h1>
          <h2>Talk about development<br />with developers 👩🏻‍💻👨🏻‍💻</h2>

          <div>
            <Button>
              <GitHub fill="#fff" width={24} height={24} />
              Login with GitHub
            </Button>
          </div>

        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      }`}</style>

    </>
  )
}

// https://github.com/Jonatandb/curso-nextjs-twitter-clone
// https://youtu.be/2jxc8DMzt0I

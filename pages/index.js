import Head from 'next/head'
import styles from './Index.module.css'
import AppLayout from '../components/AppLayout/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'

import { loginWithGitHub, onAuthStateChanged } from '../firebase/client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleLogin = () => {
    loginWithGitHub()
      .then(setUser)
      .catch(err => {
        console.error(err.message)
      })
  }

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
          <h2>
            Talk about development
            <br />
            with developers 👩🏻‍💻👨🏻‍💻
          </h2>

          <div>
            {user === null && (
              <Button onClick={handleLogin}>
                <GitHub fill='#fff' width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
              </div>
            )}
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

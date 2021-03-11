import { useEffect, useState } from 'react'
import Head from 'next/head'

import AppLayout from 'components/AppLayout/AppLayout'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'

import { colors } from 'styles/theme'

import { loginWithGitHub, onAuthStateChanged } from 'firebase/client'

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
              <Avatar
                src={user.avatar}
                alt={user.username}
                text={user.username}
              />
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
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      }`}</style>
    </>
  )
}

// https://github.com/Jonatandb/curso-nextjs-twitter-clone
// https://youtu.be/2jxc8DMzt0I

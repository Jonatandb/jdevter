import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'
import Logo from 'components/Logo'

import { colors } from 'styles/theme'

import { loginWithGitHub } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch(err => {
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
          <Logo width={100} />
          <h1>Jdevter</h1>
          <h2>
            Talk about development
            <br />
            with developers 👩🏻‍💻👨🏻‍💻
          </h2>

          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill='#fff' width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.NOT_KNOWN && <img src='/spinner.gif' />}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 20px;
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

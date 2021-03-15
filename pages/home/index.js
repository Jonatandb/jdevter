import { useEffect, useState } from 'react'
import Link from 'next/link'

import AppLayout from 'components/AppLayout'
import Jdevit from 'components/Jdevit'
import useUser from 'hooks/useUser'

import { getLatestJdevits } from 'firebase/client'
import Create from 'components/Icons/Create'
import Home from 'components/Icons/Home'
import Search from 'components/Icons/Search'
import { colors } from 'styles/theme'
import Head from 'next/head'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && getLatestJdevits().then(setTimeline)
  }, [user])

  return (
    <>
      <AppLayout>
        <Head>
          <title>Home / Jdevter 🐦</title>
        </Head>
        <header>
          <h2>Home</h2>
        </header>
        <section>
          {timeline.map(
            ({
              avatar,
              content,
              createdAt,
              id,
              likesCount,
              sharedCount,
              userId,
              userName,
            }) => {
              return (
                <Jdevit
                  avatar={avatar}
                  content={content}
                  createdAt={createdAt}
                  id={id}
                  key={id}
                  likesCount={likesCount}
                  sharedCount={sharedCount}
                  userId={userId}
                  userName={userName}
                />
              )
            }
          )}
        </section>
        <nav>
          <Link href='/home'>
            <a>
              <Home width={32} height={32} stroke='#09f' />
            </a>
          </Link>
          <Link href='search'>
            <a>
              <Search width={32} height={32} stroke='#09f' />
            </a>
          </Link>
          <Link href='compose/jdevit'>
            <a>
              <Create width={32} height={32} stroke='#09f' />
            </a>
          </Link>
        </nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          backdrop-filter: blur(5px);
          background-color: #fffa;
          border-bottom: 1px solid #eee;
          display: flex;
          height: 49px;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        section {
          flex: 1;
        }

        nav {
          background-color: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
          display: flex;
        }

        nav a {
          display: flex;
          align-items: center;
          flex: 1 1 auto;
          height: 100%;
          justify-content: center;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        nav a:hover > :global(svg) {
          stroke: ${colors.secondary};
        }
      `}</style>
    </>
  )
}

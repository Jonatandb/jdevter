import AppLayout from 'components/AppLayout'
import Jdevit from 'components/Jdevit'
import { getLatestJdevits } from 'firebase/client'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && getLatestJdevits().then(setTimeline)
  }, [user])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
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
        <nav></nav>
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

        nav {
          background-color: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}

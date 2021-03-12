import AppLayout from 'components/AppLayout'
import Jdevit from 'components/Jdevit'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then(res => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => {
            return (
              <Jdevit
                avatar={avatar}
                id={id}
                key={id}
                message={message}
                username={username}
              />
            )
          })}
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

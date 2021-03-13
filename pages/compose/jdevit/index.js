import { useState } from 'react'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { addJdevit } from 'firebase/client'
import { useRouter } from 'next/router'

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

export default function ComposeJdevit() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const router = useRouter()
  const user = useUser()

  const handleChange = event => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSumbit = event => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addJdevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(res => {
        router.push('/')
      })
      .catch(err => {
        console.error(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled =
    !message.trim().length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSumbit}>
          <textarea
            placeholder='¿Qué está pasando?'
            value={message}
            onChange={handleChange}
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }

        textarea {
          border: 0;
          font-size: 21px;
          min-height: 200px;
          padding: 15px;
          outline: 0;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}

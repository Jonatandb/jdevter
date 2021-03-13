import { useState } from 'react'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import useUser from 'hooks/useUser'

export default function ComposeJdevit() {
  const [message, setMessage] = useState('')
  useUser()

  const handleChange = event => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSumbit = event => {
    event.preventDefault()
    alert('Enviando mensaje: ' + message)
  }

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
            <Button disabled={!message.trim().length}>Devitear</Button>
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

import { useEffect, useState } from 'react'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { addJdevit, uploadImg } from 'firebase/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Avatar from 'components/Avatar'

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export default function ComposeJdevit() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState()
  const [imgURL, setImgURL] = useState()

  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

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
      img: imgURL,
    })
      .then(res => {
        router.push('/home')
      })
      .catch(err => {
        console.error(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const handleDragEnter = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0]
    const task = uploadImg(file)
    setTask(task)
  }

  const isButtonDisabled =
    !message.trim().length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <Head>
          <title>Create a Jdevit / Jdevter 🐦</title>
        </Head>
        <section className='form-container'>
          {user && (
            <section className='avatar-container'>
              <Avatar src={user.avatar} />{' '}
            </section>
          )}
          <form onSubmit={handleSumbit}>
            <textarea
              placeholder='¿Qué está pasando?'
              value={message}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onChange={handleChange}
            ></textarea>
            {imgURL && (
              <section className='remove-img'>
                <button onClick={() => setImgURL()}>x</button>
                <img src={imgURL} />
              </section>
            )}
            <div>
              <Button disabled={isButtonDisabled}>Devitear</Button>
            </div>
          </form>
        </section>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }

        .avatar-container {
          padding-top: 20px;
          padding-left: 10px;
        }

        .form-container {
          display: flex;
          align-items: flex-start;
        }

        .remove-img {
          position: relative;
        }

        button {
          top: 15px;
          right: 15px;
          position: absolute;
          width: 32px;
          height: 32px;
          background: rgba(0, 0, 0, 0.3);
          border: 0;
          border-radius: 9999px;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }

        form {
          padding: 10px;
        }

        img {
          border-radius: 10px;
          height: auto;
          width: 100%;
        }

        textarea {
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? '3px dashed #09f'
            : '3px solid transparent'};
          border-radius: 10px;
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

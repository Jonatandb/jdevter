import Link from 'next/link'
export default function TimeLine({ userName }) {
  return (
    <>
      <h1>This is the timeline of {userName}!</h1>
      <Link href='/'>
        <a>Go home</a>
      </Link>
      <style jsx>{`
        h1 {
          color: orange;
        }
      `}</style>
    </>
  )
}

TimeLine.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello').then(res => res.json())
  // Esto se puede dejar comentado porque la API
  //      devuelve justo lo que el componente espera:
  // .then(response => {
  //   //console.log('Respuesta de la API!:', response)
  //   const { userName } = response
  //   return { userName }
  // })
}

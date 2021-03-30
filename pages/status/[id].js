import Jdevit from 'components/Jdevit'

export default function JdevitPage(props) {
  return <Jdevit {...props} />
}

JdevitPage.getInitialProps = context => {
  const { query, res } = context
  const { id } = query

  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : process.env.NEXT_PUBLIC_URL

  const url = `${host}api/jdevit/${id}\n`

  return fetch(url).then(apiResponse => {
    if (apiResponse.ok) return apiResponse.json()
    if (res) {
      res.writeHead(301, { Location: '/home' }).end()
    }
  })
}

import Jdevit from 'components/Jdevit'

export default function JdevitPage(props) {
  return <Jdevit {...props} />
}

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params
  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : process.env.NEXT_PUBLIC_URL
  const url = `${host}api/jdevit/${id}\n`

  const apiResponse = await fetch(url)

  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return {
      props,
    }
  }
  if (res) {
    res.writeHead(301, { Location: '/home' }).end()
  }
}

import Jdevit from 'components/Jdevit'

export default function JdevitPage(props) {
  return <Jdevit {...props} />
}

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params
  const host = process.env.NEXT_PUBLIC_URL
  const url = `${host}api/jdevit/${id}`
  console.log(`getServerSideProps() -> host: ${host} url: ${url}`);

  const apiResponse = await fetch(url)

  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return {
      props,
    }
  }
  console.log(`getServerSideProps() -> Error: ${apiResponse?.status}`);

  if (res) {
    res.writeHead(301, { Location: '/home' }).end()
  }

  return {
    props: {},
  }
}

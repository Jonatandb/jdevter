import { firestore } from 'firebase/admin'

export default (req, res) => {
  const { query } = req
  const { id } = query

  return new Promise(resolve => {
    // Fix NextJS issue: https://github.com/vercel/next.js/issues/10439

    firestore
      .collection('devits')
      .doc(id)
      .get()
      .then(doc => {
        const data = doc.data()
        if (!data) throw new Error('Jdevit id not found: ' + id)
        const idDoc = doc.id
        const { createdAt } = data

        res.json({
          id: idDoc,
          ...data,
          createdAt: +createdAt.toDate(),
        })
      })
      .catch(e => {
        console.error(`api/jdevits/${id} -> Error:`, e.message)
        res.status(404).end()
      })
  })
}

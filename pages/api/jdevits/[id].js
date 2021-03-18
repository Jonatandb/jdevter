import { firestore } from 'firebase/admin'

export default (req, res) => {
  const { query } = req
  const { id } = query

  firestore
    .collection('devits')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      if (!data) throw new Error('Jdevit id not found: ' + id)
      res.json(data)
    })
    .catch(e => {
      console.error(`api/jdevits/${id} -> Error:`, e.message)
      res.status(404).end()
    })
}

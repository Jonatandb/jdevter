const admin = require('firebase-admin')

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT // require('../firebase-keys.json')

try {
  const parsedServiceAccount = JSON.parse(
    Buffer.from(serviceAccount, 'base64').toString()
  )
  admin.initializeApp({
    credential: admin.credential.cert(parsedServiceAccount),
  })
} catch (e) {}

export const firestore = admin.firestore()

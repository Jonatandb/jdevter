const admin = require('firebase-admin')

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT // require('../firebase-keys.json')

!admin.apps.length ||
  (admin.apps.length === 1 &&
    admin.initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
      },
      'jdevter_api'
    ))

export const firestore = admin.firestore()

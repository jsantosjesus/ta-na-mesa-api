// Arquivo firebase.ts

import admin from 'firebase-admin';
import 'dotenv/config';
import { cert } from 'firebase-admin/app';


const firebaseAdmin = admin.initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n')
    }),
    databaseURL: "https://ta-na-mesa.firebaseio.com"
  });

export default firebaseAdmin;
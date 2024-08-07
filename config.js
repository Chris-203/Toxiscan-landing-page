const firebaseConfig = {
  apiKey: ENV.apiKey,
  authDomain: ENV.authDomain,
  projectId: ENV.projectId,
  storageBucket: ENV.storageBucket,
  messagingSenderId: ENV.messagingSenderId,
  appId: ENV.appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
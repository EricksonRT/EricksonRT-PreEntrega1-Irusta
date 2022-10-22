// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD132pGWlfBpFuDuJyfIrXzyqIAliawaTk',
  authDomain: 'cursoreact-workshop.firebaseapp.com',
  projectId: 'cursoreact-workshop',
  storageBucket: 'cursoreact-workshop.appspot.com',
  messagingSenderId: '210283060579',
  appId: '1:210283060579:web:d7f27d7ae6c1e7fb024756',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
production: true,
firebaseConfig: {
apiKey: "AIzaSyCNwhjBYomaIlt5VF6J8qdfiGkYgHCCyx0",
  authDomain: "teste-de89f.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/teste-de89f/authentication/emails",
  projectId: "teste-de89f",
  storageBucket: "teste-de89f.appspot.com",
  messagingSenderId: "302141234427",
  appId: "1:302141234427:web:76f8b2304ab58db40fe45e"
}
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);


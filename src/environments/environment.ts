// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
production: true,
firebaseConfig : {
  apiKey: "AIzaSyCNwhjBYomaIlt5VF6J8qdfiGkYgHCCyx0",
  authDomain: "teste-de89f.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/teste-de89f/authentication/emails",
  projectId: "teste-de89f",
  storageBucket: "teste-de89f.appspot.com",
  messagingSenderId: "302141234427",
  appId: "1:302141234427:web:76f8b2304ab58db40fe45e"
}}
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDX_ntMxzFP1N5Ih8DZZLTlEa_Km1k7MSQ",
    authDomain: "goalcoach-f7272.firebaseapp.com",
    databaseURL: "https://goalcoach-f7272.firebaseio.com",
    projectId: "goalcoach-f7272",
    storageBucket: "goalcoach-f7272.appspot.com",
    messagingSenderId: "651988275151"
  };

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

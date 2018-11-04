import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCROvSCbALC-wdBJUJxP-hiYZNc4QgjIQM",
  authDomain: "goalcoach-14d07.firebaseapp.com",
  databaseURL: "https://goalcoach-14d07.firebaseio.com",
  projectId: "goalcoach-14d07",
  storageBucket: "goalcoach-14d07.appspot.com",
  messagingSenderId: "1019076040822"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

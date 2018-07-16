import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import { firebaseSettings } from './firebaseSettings';

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(firebaseSettings)
export default firebase.firestore();

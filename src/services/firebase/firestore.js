import firebase from './initializer';
import { firebaseSettings } from './settings';

firebase.firestore().settings(firebaseSettings);
export default firebase.firestore();
/* eslint-disable prettier/prettier */
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAhTLeEoCUFmMDnE_H5MODuTZPtYRoPrqo',
    authDomain: 'my-doctor-01-83545.firebaseapp.com',
    projectId: 'my-doctor-01-83545',
    storageBucket: 'my-doctor-01-83545.appspot.com',
    messagingSenderId: '844942002040',
    appId: '1:844942002040:web:12fcbf70c80a627384aa8d',
    measurementId: 'G-LRBDT93WT5',
    databaseURL: 'https://my-doctor-01-83545-default-rtdb.asia-southeast1.firebasedatabase.app/',
};
firebase.initializeApp(firebaseConfig);

const Fire = firebase;

export default Fire;

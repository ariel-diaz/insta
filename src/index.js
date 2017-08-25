import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyApnMQ4N4E0IskgprZTV2dVid8-Fmk8GUA",
    authDomain: "instagram-d29a0.firebaseapp.com",
    databaseURL: "https://instagram-d29a0.firebaseio.com",
    projectId: "instagram-d29a0",
    storageBucket: "instagram-d29a0.appspot.com",
    messagingSenderId: "865937902359"
});




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

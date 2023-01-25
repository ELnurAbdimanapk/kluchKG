import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvXcS-5t7Uq_YsAkEOglxsfmq8GgwTz04",
    authDomain: "practice-af796.firebaseapp.com",
    projectId: "practice-af796",
    storageBucket: "practice-af796.appspot.com",
    messagingSenderId: "571303998940",
    appId: "1:571303998940:web:13fc4cbf9386be92e08b19",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

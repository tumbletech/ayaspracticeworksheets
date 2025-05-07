<<<<<<< HEAD
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNs6rGkXBNFiNxjqFrG2_Q7tKM1QpcVo",
    authDomain: "aya-s-educational-worksheets.firebaseapp.com",
    projectId: "aya-s-educational-worksheets",
    storageBucket: "aya-s-educational-worksheets.appspot.com",
    messagingSenderId: "1017245985084",
    appId: "1:1017245985084:web:c13a3df6049c4bedfbd4dc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance
export { db };
=======
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNs6rGkXBNFiNxjqFrG2_Q7tKM1QpcVo",
    authDomain: "aya-s-educational-worksheets.firebaseapp.com",
    projectId: "aya-s-educational-worksheets",
    storageBucket: "aya-s-educational-worksheets.appspot.com",
    messagingSenderId: "1017245985084",
    appId: "1:1017245985084:web:c13a3df6049c4bedfbd4dc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance
export { db };
>>>>>>> 268fa5d0e56be2cb9e06805325702e6af1b2a4cf

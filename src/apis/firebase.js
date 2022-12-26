import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function contactMe(newRequest) {
    try {
        
        const Request = {
            ...newRequest,
            createdAt: serverTimestamp()
        }
        // store the post in db
        const postDocRef = await addDoc(collection(firestore, 'contact'), Request)

        return 'success'
        
    } catch (error) {
        console.error('requestTest Error: ', error.message)
        return error.message
    }
}

import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSASING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// Upload images to firebase storage
const storage = getStorage(app);

export const uploadImage = async (image) => {
  const imageRef = ref(storage, `review-images/${Math.random()}.jpeg`);

  const snapshot = await uploadString(imageRef, image, "data_url");

  const imgUrl = getDownloadURL(snapshot.ref);

  return imgUrl;
};

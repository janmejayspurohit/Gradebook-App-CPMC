import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGESENDERID,
  appId: process.env.EXPO_PUBLIC_APPID,
};

export const app = initializeApp(firebaseConfig);

export const fetchStudentDataFromFirestore = async () => {
  const db = getFirestore(app);
  const studentsCollection = collection(db, "students");

  try {
    const querySnapshot = await getDocs(studentsCollection);
    const studentData = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      studentData.push(data);
    });

    return studentData;
  } catch (error) {
    console.error("Error fetching student data from Firestore:", error);
    return [];
  }
};

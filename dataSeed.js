import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "../my-second-app/firebaseConfig.js";
import { studentData } from "../my-second-app/studentData.js";

const addStudentDataToFirestore = async () => {
  try {
    const db = getFirestore(app);
    const studentsCollection = collection(db, "students");

    const querySnapshot = await getDocs(studentsCollection);
    if (querySnapshot.empty) {
      for (const student of studentData) {
        await addDoc(studentsCollection, student)
          .then((docRef) => {
            console.log(`Added data for ${student.name} with ID: ${docRef.id}`);
          })
          .catch((error) => {
            console.error(`Error adding data for ${student.name}: ${error}`);
          });
      }
    } else {
      console.log("Data already exists in Firestore. Skipping data addition.");
    }
  } catch (error) {
    console.error("Error adding student data to Firestore:", error);
  }
};

addStudentDataToFirestore();

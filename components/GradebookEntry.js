import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StudentCard from "./StudentCard";

const GradebookEntry = ({ student = {} }) => {
  return (
    <View key={student.name} style={styles.container}>
      <View style={styles.studentCard}>
        <StudentCard />
      </View>
      <View style={styles.studentDetails}>
        <Text style={styles.formatGrade(student.grade)}>Grade: {student.grade}</Text>
        <Text>Student Name: {student.name}</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View style={styles.smallBox}>
            <Text>Absences: {student.absences}</Text>
          </View>
          <View style={styles.smallBox}>
            <Text>Bonus Points: {student.absences}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  formatGrade: (grade) => ({
    color: grade >= 50 ? "green" : "red",
  }),
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginHorizontal: "2%",
    padding: 5,
    marginBottom: "2%",
  },
  smallBox: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  studentCard: {
    width: "30%",
  },
  studentDetails: {
    width: "70%",
  },
});

export default GradebookEntry;

import { StatusBar } from "expo-status-bar";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { studentData } from "./studentData";
import GradebookEntry from "./components/GradebookEntry";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  function TitleScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 44, fontWeight: "bold" }}>Welcome to Z101</Text>
        <Button title="Go to Grades" onPress={() => navigation.navigate("Grades")} />
      </View>
    );
  }
  const GradesScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <View style={styles.titleBar}>
          <Text style={{ fontSize: 44, fontWeight: "bold" }}>Z101: Gradebook</Text>
        </View>
        <FlatList data={studentData} keyExtractor={(item) => item.id} renderItem={({ item }) => <GradebookEntry student={item} />} />
      </SafeAreaView>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TitleScreen} />
        <Stack.Screen name="Grades" component={GradesScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  titleBar: {
    height: "10%",
    alignContent: "center",
    justifyContent: "center",
  },
});

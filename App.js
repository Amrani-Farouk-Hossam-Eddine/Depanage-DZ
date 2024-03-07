import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

import Navigation from "./app/routers/Navigation";
import CoursesHistory from "./app/driver/screens/CoursesHistory";
import Coursat from "./app/driver/screens/Coursat";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

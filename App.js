import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import Login from "./app/screens/Login";
import Regester from "./app/screens/Register";
import FirstPage from "./app/screens/FirstPage";
import SecondePage from "./app/screens/SecondePage";
import Navigation from "./app/routers/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SecondePage /> */}
      <Navigation />
      {/* <FirstPage/> */}
      {/* <Login/> */}
      {/* <Regester/>  */}
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

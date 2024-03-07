import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "../clien/screens/FirstPage";
import SecondePage from "../clien/screens/SecondePage";
import Login from "../clien/screens/Login";
import Register from "../clien/screens/Register";
import RegisterDriver from "../driver/screens/RegisterDriver";
import LoginDriver from "../driver/screens/LoginDriver";

const Stack = createNativeStackNavigator();

function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true, // Set this to false to hide the header by default
        }}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondePage" component={SecondePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginDriver" component={LoginDriver} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;

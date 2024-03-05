import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "../screens/FirstPage";
import SecondePage from "../screens/SecondePage";
import Login from "../screens/Login";
import Register from "../screens/Register";
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
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;

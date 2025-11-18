import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DashboardScreen from "./screens/DashBoardScreen";
import BooksScreen from "./screens/BooksScreen";
import MembersScreen from "./screens/MembersScreen";
import IssuedBooksScreen from "./screens/IssuedBooksScreen";
import SettingsScreen from "./screens/SettingsScreen"; // ✅ Make sure this is a valid React component

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// 🧭 Drawer Navigator for Dashboard
function DashboardDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // Keep custom headers
        drawerActiveTintColor: "#008080",
        drawerLabelStyle: { fontSize: 16, fontWeight: "500" },
      }}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Books" component={BooksScreen} />
      <Drawer.Screen name="Members" component={MembersScreen} />
      <Drawer.Screen name="Issued Books" component={IssuedBooksScreen} />
      <Drawer.Screen name="Return Books" component={DashboardScreen} />
      <Drawer.Screen name="Profile" component={DashboardScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      
    </Drawer.Navigator>
    
  );
}

// 🔹 Main App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* Use Drawer for Dashboard */}
        <Stack.Screen name="Dashboard" component={DashboardDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

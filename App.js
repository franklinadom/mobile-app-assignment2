import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import WorkoutListScreen from "./src/screens/WorkoutListScreen";
import WorkoutDetailsScreen from "./src/screens/WorkoutDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WorkoutList"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
          <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

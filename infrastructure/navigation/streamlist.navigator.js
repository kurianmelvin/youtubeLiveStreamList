import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StreamListScreen } from "../../features/streamList/screens/streamList.screen";

const StreamListStack = createNativeStackNavigator();

export const StreamListNavigator = () => {
  return (
    <StreamListStack.Navigator screenOptions={{ headerShown: false }}>
      <StreamListStack.Screen name="StreamList" component={StreamListScreen} />
    </StreamListStack.Navigator>
  );
};

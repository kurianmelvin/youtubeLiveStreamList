import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { YoutubeNavigator } from "./youtube.navigator";
import { StreamListNavigator } from "./streamlist.navigator";
import { StreamListContextProvider } from "../../services/streamList/streamList.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Streams: "menufold",
  Youtube: "youtube",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <>
        <AntDesign name={iconName} size={size} color={color} />
      </>
    ),
  };
};

export const AppNavigator = () => (
  <StreamListContextProvider>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Streams" component={StreamListNavigator} />
      <Tab.Screen name="Youtube" component={YoutubeNavigator} />
    </Tab.Navigator>
  </StreamListContextProvider>
);

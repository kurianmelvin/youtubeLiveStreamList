import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { YoutubeLiveScreen } from "../../features/youtubeLive/screens/youtube-live.screen";

const YoutubeStack = createNativeStackNavigator();

export const YoutubeNavigator = () => {
  return (
    <YoutubeStack.Navigator screenOptions={{ headerShown: false }}>
      <YoutubeStack.Screen name="Youtube1" component={YoutubeLiveScreen} />
    </YoutubeStack.Navigator>
  );
};

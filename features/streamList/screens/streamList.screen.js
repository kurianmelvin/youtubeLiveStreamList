import React from "react";
import { Button, Image, View, Platform, Text, TextInput } from "react-native";
import { StreamList } from "../components/streamList.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const StreamListScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>Stream list screen</Text> */}
      <StreamList />
    </View>
  );
};

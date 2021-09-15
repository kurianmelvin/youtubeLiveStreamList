import React, { useState, useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";
import xtype from "xtypejs";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { ActivityIndicator, Colors } from "react-native-paper";
import { StreamListContext } from "../../../services/streamList/streamList.context";

export const StreamList = () => {
  const { videoList } = useContext(StreamListContext);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.snippet.title} />;

  console.log("$$$$$$$$$$$$$$videoList 1 $$$$$$$$$$$$$$$$");
  console.log(videoList);
  console.log(videoList[0].contentDetails.videoId);
  console.log(videoList[0].snippet.playlistId);
  //   console.log(xtype(videoList));
  console.log("$$$$$$$$$$$$$$videoList 2 $$$$$$$$$$$$$$$$");
  console.log("DONE");
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
  },
});

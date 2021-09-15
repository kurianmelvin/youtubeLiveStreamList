/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";
import xtype from "xtypejs";
import camelize from "camelize";

const MAX_RESULT = 2;
const PLAYLIST_ID = "PLU12uITxBEPHOJO1FU8qll6gQmKcXp5S7";
const API_KEY = "AIzaSyAYk0DfOwsui_0kDLlGQsOhNtPFMKd8V6M";

export const StreamListService = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`
    // "https://randomuser.me/api/?gender=female&results=1"
  );
  //   console.log(res.json());
  return await res.json();
};

export const StreamListTransform = ({ results = [] }) => {
  const mappedResults = results.map((videoList) => {
    return {
      ...videoList,
    };
  });

  return camelize(mappedResults);
};

import React, { useState, createContext, useEffect } from "react";
import xtype from "xtypejs";

import { StreamListService, StreamListTransform } from "./streamList.service";

export const StreamListContext = createContext();

export const StreamListContextProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  const fetchListData = () => {
    try {
      StreamListService()
        // .then(StreamListTransform)
        .then((results) => {
          //   console.log(results);
          setVideoList(results.items);
        });
    } catch (error) {
      console.log("error caught");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListData();
  }, []);

  //   console.log("$$$$$$$$$$$$$$videoList$$$$$$$$$$$$$$$$");
  //   console.log(videoList);
  //   console.log(xtype(videoList));
  //   console.log("$$$$$$$$$$$$$$videoList$$$$$$$$$$$$$$$$");
  //   console.log("DONE");

  return (
    <StreamListContext.Provider
      value={{
        videoList,
      }}
    >
      {children}
    </StreamListContext.Provider>
  );
};

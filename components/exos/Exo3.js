import React, { useEffect, useState } from "react";
import { AsyncStorage, ScrollView, Text } from "react-native";

export const API_URL =  "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state";
  

export const get = async ( url, networkPriority = false) => {
  const key = encodeURIComponent(url);
  const value = await AsyncStorage.getItem(key);

  try{
    if (value !== null && !networkPriority) {
      return { data: JSON.parse(value)};
    } else {
      const response = await fetch (url);
      const json = await response.json();
      await AsyncStorage.setItem(key, JSON.stringify(json));

      return {
        data: json, 
      };
    }
  }catch (error) {
    return {
      data: JSON.parse(value),
      error: error.message,
    };
  }
}

const ApiFetch = () => {
  const [data, setData] = useState(null);
  var setLoading = useState(null);
  setLoading = setLoading[1]  
  const fetchData = networkPriority => {
    setLoading(true);
    get(API_URL, networkPriority).then(data => {
      setData(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
    fetchData(true);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data && (
        <Text>
          {data.data && <Text>{data.data.nhits} résultats</Text> }
        </Text>
      )}
    </ScrollView>
  );
};

export default ApiFetch;
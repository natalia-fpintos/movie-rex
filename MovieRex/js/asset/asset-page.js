import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';
import Config from 'react-native-config';

import { VerticalImage } from '../images/vertical-image-component.js'


export const AssetPage = ({ route }) => {
  const { id } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key\=${Config.API_KEY}&language=en-UK`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoading ? <ActivityIndicator/> : (
            <ScrollView>
              <VerticalImage movieInfo={data} />
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
  },
  list: {
    paddingHorizontal: 24
  }
});
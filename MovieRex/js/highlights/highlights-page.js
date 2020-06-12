import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Config from 'react-native-config';

import { Header } from '../header/header-component.js';
import { HorizontalImage } from '../images/horizontal-image-component.js';


export const HighlightsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie\?api_key\=${Config.API_KEY}\&language\=en-UK&region=GB&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2020`, 
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header title="Highlights"/>
        <View style={styles.container}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              style={styles.list}
              data={data}
              keyExtractor={({ id }, index) => id.toString()}
              renderItem={({item}) => {
                if (!item.backdrop_path) {
                  return null;
                }
                return (
                  <HorizontalImage backdropPath={item.backdrop_path} title={item.title} />
              )}
              }
            />
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
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Config from 'react-native-config';

import { HorizontalImage } from '../images/horizontal-image-component.js';


export const ResultsPage = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { genre, genreId } = route.params;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie\?api_key\=${Config.API_KEY}\&language\=en-UK&region=GB&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&year=2020&with_release_type=4&primary_release_date.lte=2020-06-18`, 
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
                  <HorizontalImage 
                    backdropPath={item.backdrop_path} 
                    title={item.title}
                    onPress={() => navigation.navigate('Asset', { id: item.id, name: item.title })}
                  />
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
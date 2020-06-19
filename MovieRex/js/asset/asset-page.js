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

import { VerticalImage } from '../images/vertical-image-component.js';
import { MovieInfoSection } from './movie-info-section-component.js';


export const AssetPage = ({ route }) => {
  const { id } = route.params;
  const [isLoadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadingProvider, setLoadingProvider] = useState(true);
  const [providers, setProviders] = useState([]);

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
      .finally(() => setLoadingData(false));

    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=UK&source_id=${id}&source=tmdb`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": Config.UTELLY_API_KEY
      }
    })
    .then(response => response.json())
    .then((json) => setProviders(json))
    .catch((error) => console.error(error))
    .finally(() => setLoadingProvider(false));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoadingData || isLoadingProvider ? <ActivityIndicator/> : (
            <ScrollView>
              <VerticalImage poster={data.poster_path} backdrop={data.backdrop_path} />
              <MovieInfoSection movieInfo={data} providers={providers.collection.locations} />
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
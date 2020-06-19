import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import Config from 'react-native-config';

import { VerticalImage } from '../images/vertical-image-component.js';
import { HorizontalImage } from '../images/horizontal-image-component.js';
import { MovieInfoSection } from './movie-info-section-component.js';


export const AssetPage = ({ navigation, route }) => {
  const { id } = route.params;
  const [isLoadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadingMovies, setLoadingMovies] = useState(true);
  const [movies, setMovies] = useState([]);
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

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key\=${Config.API_KEY}&language=en-UK&page=1`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      .then((response) => response.json())
      .then((json) => setMovies(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingMovies(false));

      
    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=UK&source_id=${id}&source=tmdb`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": Config.UTELLY_API_KEY
      }
    })
    .then(response => response.json())
    .then((json) => {
      if ('collection' in json) {
        return setProviders(json.collection.locations);
      }
      return setProviders([]);
    })
    .catch((error) => console.error(error))
    .finally(() => setLoadingProvider(false));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoadingData || isLoadingMovies || isLoadingProvider ? <ActivityIndicator/> : (
            <FlatList
              ListHeaderComponent={() => {
                return (
                  <>
                    <VerticalImage poster={data.poster_path} backdrop={data.backdrop_path} />
                    <MovieInfoSection movieInfo={data} providers={providers} />
                    <Text style={styles.movieTitle}>More movies like this</Text>
                  </>
                );
              }}
              data={movies.results}
              keyExtractor={({ id }, index) => id.toString()}
              style={styles.contentWrapper}
              ListEmptyComponent={ () => <Text style={styles.moviesNotFound}>No movies found</Text>}
              renderItem={({item}) => {
                if (!item.backdrop_path) {
                  return null;
                }
                return (
                  <HorizontalImage 
                    backdropPath={item.backdrop_path} 
                    title={item.title}
                    onPress={() => navigation.push('Asset', { id: item.id, name: item.title })}
                  />
              )}
              }
            >
            </FlatList>
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
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    paddingHorizontal: 8
  },
  contentWrapper: {
    marginHorizontal: 32
  },
  moviesNotFound: {
    fontSize: 16,
    color: '#5C5C5C',
    paddingLeft: 8
  }
});
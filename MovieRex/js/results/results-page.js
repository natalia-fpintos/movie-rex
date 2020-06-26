import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

import { MoviesList } from '../movies-list/movies-list-component.js';

export const ResultsPage = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { genreId, searchData } = route.params;

  useEffect(() => {
    if (genreId) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie\?api_key\=${
          Config.API_KEY
        }\&language\=en-UK&region=GB&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&year=2020&with_release_type=4&primary_release_date.lte=2020-06-18`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }
      )
        .then(response => response.json())
        .then(json => setData(json.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setData(searchData);
      setLoading(false);
    }
  }, []);

  return (
    <MoviesList navigation={navigation} data={data} isLoading={isLoading} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto'
  },
  list: {
    paddingHorizontal: 24
  },
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text
} from 'react-native';
import Config from 'react-native-config';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HorizontalImage } from '../images/horizontal-image-component.js';
import { TextInput } from 'react-native-gesture-handler';

export const SearchPage = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const searchAPI = searchTerm => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie\?api_key\=${
          Config.API_KEY
        }\&language\=en-UK&region=GB&include_adult=false&page=1&query=${searchTerm}`,
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
      setData([]);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <Ionicons name="ios-search" style={styles.searchIcon} size={20} color="gray" />
            <TextInput
              style={styles.search}
              value={searchInput}
              placeholder={'Search...'}
              onChangeText={newValue => {
                setSearchInput(newValue);
                searchAPI(newValue);
              }}
            />
          </View>
          <View style={styles.hairlineDivider}>
            <Text style={styles.movieTitle}>Search results</Text>
          </View>
          <FlatList
            data={data.slice(0, 3)}
            keyExtractor={({ id }, index) => id.toString()}
            style={styles.contentWrapper}
            ListEmptyComponent={() => <Text style={styles.moviesNotFound}>No movies found</Text>}
            renderItem={({ item }) => {
              if (!item.backdrop_path) {
                return null;
              }
              return (
                <HorizontalImage
                  backdropPath={item.backdrop_path}
                  title={item.title}
                  onPress={() =>
                    navigation.push('Asset', { id: item.id, name: item.title })
                  }
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    margin: 24
  },
  search: {
    flex: 1,
    fontSize: 16
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#5C5C5C',
    borderRadius: 20,
    height: 40,
    padding: 8,
  },
  searchIcon: {
    alignSelf: 'center',
    marginRight: 8,
    marginLeft: 4
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 50,
    paddingHorizontal: 8
  },
  hairlineDivider: {
    paddingBottom: 5,
    paddingLeft: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    marginBottom: 16
  }
});

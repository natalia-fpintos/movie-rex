import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Config from 'react-native-config';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SmallHorizontalImage } from '../images/small-horizontal-image-component.js';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({ searchInput, setSearchInput, searchAPI }) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons
        name="ios-search"
        style={styles.searchIcon}
        size={20}
        color="gray"
      />
      <TextInput
        style={styles.search}
        value={searchInput}
        placeholder={'Search...'}
        onChangeText={newValue => {
          setSearchInput(newValue);
          searchAPI(newValue);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setSearchInput('');
          searchAPI('');
        }}
      >
        <Ionicons
          name="ios-close-circle"
          style={styles.resetSearchIcon}
          size={20}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

const SearchResults = ({ navigation, data, searchTerm }) => {
  return (
    <>
      {data.length > 3 ? (
        <TouchableOpacity
          onPress={() =>
            navigation.push('SearchResults', { searchData: data, searchTerm: searchTerm })
          }
        >
          <Text style={styles.link}>See all</Text>
        </TouchableOpacity>
      ) : null}
      {data.length > 0 ? (
        data
          .slice(0, 3)
          .map(item => <ResultRow key={item.id} navigation={navigation} item={item} />)
      ) : (
        <Text style={styles.moviesNotFound}>No movies found</Text>
      )}
    </>
  );
};

const ResultRow = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...styles.searchResults }}
      onPress={() =>
        navigation.push('Asset', { id: item.id, name: item.title })
      }
    >
      <SmallHorizontalImage backdropPath={item.backdrop_path} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export const SearchPage = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
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
        .then(json =>
          setData(json.results.filter(item => item.backdrop_path !== null))
        )
        .catch(error => console.error(error));
    } else {
      setData([]);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchAPI={searchAPI}
          />
          <View style={styles.hairlineDivider}>
            <Text style={styles.sectionTitle}>Search results</Text>
          </View>
          <SearchResults navigation={navigation} data={data} searchTerm={searchInput} />
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
  searchResults: {
    flexDirection: 'row',
    alignItems: 'center'
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
    padding: 8
  },
  searchIcon: {
    alignSelf: 'center',
    marginRight: 8,
    marginLeft: 4
  },
  resetSearchIcon: {
    alignSelf: 'center',
    marginRight: 4,
    marginLeft: 8
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 50,
    paddingHorizontal: 8
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 16,
    flex: 1,
    flexWrap: 'wrap'
  },
  hairlineDivider: {
    paddingBottom: 5,
    paddingLeft: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    marginBottom: 16
  },
  link: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: '#2daeeb',
    textDecorationLine: 'underline'
  },
  moviesNotFound: {
    fontSize: 16,
    color: '#5C5C5C',
    paddingLeft: 8
  }
});

import React from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Header } from '../header/header-component.js';
import { GenreButton } from '../buttons/genre-button.js';

const genres = [
  {key: "Comedy"}, 
  {key: "Action"}, 
  {key: "Sci-fi"}, 
  {key: "Horror"}, 
  {key: "Thriller"}, 
  {key: "Drama"}, 
  {key: "Romantic"}, 
  {key: "Animation"}
]

const numColumns = 2;

export const GenresPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header title="Genres"/>
        <View style={styles.container}>
          <FlatList
            data={genres}
            numColumns={numColumns}
            keyExtractor={item => item.key}
            renderItem={item => <GenreButton genreData={item}/>}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    marginVertical: 20,
    paddingHorizontal: 24
  }
});
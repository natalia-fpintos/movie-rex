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
  {key: "Comedy", emoji: 'rolling_on_the_floor_laughing'}, 
  {key: "Action", emoji: 'sunglasses'}, 
  {key: "Sci-fi", emoji: 'rocket'}, 
  {key: "Horror", emoji: 'scream'}, 
  {key: "Thriller", emoji: 'exploding_head'}, 
  {key: "Drama", emoji: 'cry'}, 
  {key: "Romantic", emoji: 'heart_eyes'}, 
  {key: "Animation", emoji: 'writing_hand'}
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
    marginVertical: 10,
    paddingHorizontal: 24
  }
});
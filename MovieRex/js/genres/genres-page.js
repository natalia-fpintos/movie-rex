import React from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { GenreButton } from '../buttons/genre-button.js';

const genres = [
  {id: 35, key: "Comedy", emoji: 'rolling_on_the_floor_laughing'}, 
  {id: 28, key: "Action", emoji: 'sunglasses'}, 
  {id: 878, key: "Sci-fi", emoji: 'rocket'}, 
  {id: 27, key: "Horror", emoji: 'scream'}, 
  {id: 53, key: "Thriller", emoji: 'exploding_head'}, 
  {id: 18, key: "Drama", emoji: 'cry'}, 
  {id: 10749, key: "Romance", emoji: 'heart_eyes'}, 
  {id: 16, key: "Animation", emoji: 'writing_hand'}
]

const numColumns = 2;

export const GenresPage = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={genres}
            numColumns={numColumns}
            keyExtractor={item => item.key}
            renderItem={({ item }) => {
              return (
                <GenreButton 
                  onPress={() => navigation.push('SearchResults', { genre: item.key, genreId: item.id })} 
                  genreData={item}
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
    marginVertical: 10,
    alignItems: 'center'
  }
});
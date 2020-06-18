import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

export const VerticalImage = props => {
  const { movieInfo } = props;
  const movieImage = movieInfo.poster_path ? movieInfo.poster_path : movieInfo.backdrop_path;

  return (
    <View style={styles.container}>
      <Image
        style={styles.verticalImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieImage}` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  verticalImage: {
    height: 500,
    width: 'auto'
  }
});
import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

export const SmallHorizontalImage = ({ backdropPath }) => {
  return (
    <Image
      style={styles.horizontalImage}
      source={{ uri: `https://image.tmdb.org/t/p/w500${backdropPath}` }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16
  },
  horizontalImage: {
    height: 100,
    width: 150
  },
  movieTitle: {
    fontSize: 16,
    color: '#ffffff'
  },
  linearGradient: {
    height: '100%',
    justifyContent: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 5
  }
});
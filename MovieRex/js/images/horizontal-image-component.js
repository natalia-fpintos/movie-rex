import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

export const HorizontalImage = props => {
  const { backdropPath, title } = props;
  debugger
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.horizontalImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500${backdropPath}` }}
      >
        <Text style={styles.movieTitle}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16
  },
  horizontalImage: {
    justifyContent: "flex-end",
    height: 200,
    width: 'auto'
  },
  movieTitle: {
    fontSize: 16,
    color: '#ffffff'
  }
});
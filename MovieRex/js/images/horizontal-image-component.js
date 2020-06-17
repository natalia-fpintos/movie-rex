import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export const HorizontalImage = props => {
  const { backdropPath, title } = props;
  debugger
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.horizontalImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500${backdropPath}` }}
      >
        <LinearGradient 
          colors={['#ffffff00', '#55555500', '#000000dd']} 
          locations={[0.7, 0.8, 1]}
          style={styles.linearGradient}
        >
          <Text style={styles.movieTitle}>{title}</Text>
        </LinearGradient>
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
  },
  linearGradient: {
    height: '100%',
    justifyContent: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 5
  }
});
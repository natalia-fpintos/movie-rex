import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export const HorizontalImage = ({ backdropPath, title, navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Asset')}
    >
      <ImageBackground
        style={styles.horizontalImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500${backdropPath}` }}
      >
        <LinearGradient 
          colors={['#ffffff00', '#55555500', '#000000dd']} 
          locations={[0.5, 0.6, 1]}
          style={styles.linearGradient}
        >
          <Text style={styles.movieTitle}>{title}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
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
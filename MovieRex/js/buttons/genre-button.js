import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Emoji from 'react-native-emoji';
import { TouchableOpacity } from 'react-native-gesture-handler';

const numColumns = 2;

export const GenreButton = ({ genreData, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.wrapper}>
        <Emoji name={genreData.emoji} style={{fontSize: 50}} />
        <Text style={styles.genreName}>{genreData.key}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160
  },
  genreName: {
    paddingTop: 5,
    color: '#000000',
    fontWeight: '600'
  },
  button: {
    flex: 1, 
    width: 100, 
    marginHorizontal: 30
  }
});
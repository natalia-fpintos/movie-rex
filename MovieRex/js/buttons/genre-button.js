import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Emoji from 'react-native-emoji';

const numColumns = 2;

export const GenreButton = props => {
  const { genreData } = props;
  return (
    <View style={styles.wrapper}>
      <Emoji name={genreData.item.emoji} style={{fontSize: 50}} />
      <Text style={styles.genreName}>{genreData.item.key}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 160
  },
  genreName: {
    paddingTop: 5,
    color: '#000000',
    fontWeight: '600'
  }
});
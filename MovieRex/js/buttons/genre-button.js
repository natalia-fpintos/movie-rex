import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

const numColumns = 2;

export const GenreButton = props => {
  const { genreData } = props;
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.horizontalImage}
        source={require('../../images/placeholder-poster.png')}
      />
      <Text style={styles.genreName}>{genreData.item.key}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalImage: {
    height: 100,
    width: 100
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 160
  },
  genreName: {
    paddingTop: 5,
    color: '#000000',
  }
});
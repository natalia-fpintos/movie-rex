import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

export const HorizontalImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.horizontalImage}
        source={require('../../images/placeholder-poster.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16
  },
  horizontalImage: {
    height: 200,
    width: 'auto'
  }
});
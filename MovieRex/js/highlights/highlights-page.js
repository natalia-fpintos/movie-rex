import React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Header } from '../header/header-component.js';
import { HorizontalImage } from '../images/horizontal-image-component.js';

export const HighlightsPage = () => {
  return (
    <>
      <Header title="Highlights"/>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={[{id: 1}, {id: 2}, {id: 3}]}
          keyExtractor={item => item.id.toString()}
          renderItem={() => <HorizontalImage />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
  },
  list: {
    paddingHorizontal: 24
  }
});
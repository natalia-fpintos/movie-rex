import React from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Header } from '../header/header-component.js';
import { HorizontalImage } from '../images/horizontal-image-component.js';

export const HighlightsPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header title="Highlights"/>
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={[{id: 1}, {id: 2}, {id: 3}]}
            keyExtractor={item => item.id.toString()}
            renderItem={() => <HorizontalImage />}
          />
        </View>
      </SafeAreaView>
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
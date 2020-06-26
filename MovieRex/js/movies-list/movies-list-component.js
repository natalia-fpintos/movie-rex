import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import { HorizontalImage } from '../images/horizontal-image-component.js';
import { Loading } from '../loading/loading-component.js';

export const MoviesList = ({ emptyComponent, data, navigation, isLoading }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              style={styles.list}
              data={data}
              keyExtractor={({ id }, index) => id.toString()}
              ListEmptyComponent={emptyComponent}
              renderItem={({ item }) => {
                if (!item.backdrop_path) {
                  return null;
                }
                return (
                  <HorizontalImage
                    backdropPath={item.backdrop_path}
                    title={item.title}
                    onPress={() =>
                      navigation.navigate('Asset', {
                        id: item.id,
                        name: item.title
                      })
                    }
                  />
                );
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto'
  },
  list: {
    paddingHorizontal: 24
  },
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

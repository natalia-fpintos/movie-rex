import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';


export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  );
};


const styles = StyleSheet.create({
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
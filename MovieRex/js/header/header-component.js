import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const Header = props => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.hairlineDivider}>
        <Text style={styles.pageTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    height: 104,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  hairlineDivider: {
    paddingBottom: 5,
    paddingLeft: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4'
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: '#000000'
  }
});
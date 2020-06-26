import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { MoviesList } from '../movies-list/movies-list-component.js';

const WatchlistEmpty = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.moviesNotFound}>Your watchlist is empty</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text style={styles.link}>Find something to watch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: '100%'
  },
  moviesNotFound: {
    fontSize: 16,
    color: '#5C5C5C',
    textAlign: 'center'
  },
  link: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 16,
    color: '#2daeeb',
    textDecorationLine: 'underline'
  }
});

export const WatchlistPage = ({ navigation, watchlist }) => {
  return (
    <MoviesList
      emptyComponent={() => <WatchlistEmpty navigation={navigation} />}
      navigation={navigation}
      data={watchlist}
      isLoading={false}
    />
  );
};

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  };
};

const connectedWatchlistPage = connect(mapStateToProps)(WatchlistPage);
export default connectedWatchlistPage;

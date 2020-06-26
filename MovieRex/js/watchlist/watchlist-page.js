import React from 'react';
import { connect } from 'react-redux'

import { addItem, removeItem } from '../store/redux-actions.js';
import { MoviesList } from '../movies-list/movies-list-component.js';

export const WatchlistPage = ({ navigation, watchlist }) => {
  return (
    <MoviesList navigation={navigation} data={watchlist} isLoading={false} />
  );
};

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  };
};

const connectedWatchlistPage = connect(mapStateToProps)(WatchlistPage)
export default connectedWatchlistPage;
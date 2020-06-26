import React from 'react';

import { MoviesList } from '../movies-list/movies-list-component.js';

export const WatchlistPage = ({ navigation }) => {
  return (
    <MoviesList navigation={navigation} data={[]} isLoading={false} />
  );
};


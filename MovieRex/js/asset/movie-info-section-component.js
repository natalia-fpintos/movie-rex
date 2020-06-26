import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import StarButton from '../buttons/star-button.js';

const MovieDetails = ({
  item,
  title,
  genre,
  year,
  durationHours,
  durationMinutes,
  reviews
}) => {
  return (
    <View style={styles.content}>
      <View style={{ ...styles.row, ...styles.starSection }}>
        <Text style={styles.movieTitle}>{title}</Text>
        <StarButton item={item} />
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>
          {genre}
        </Text>
        <Text style={{ ...styles.detailsText, ...styles.separator }}>•</Text>
        <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>
          {year}
        </Text>
        <Text style={{ ...styles.detailsText, ...styles.separator }}>•</Text>
        <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>
          {durationHours}h {durationMinutes}m
        </Text>
      </View>
      <View style={styles.row}>
        <Image
          source={require('../../images/tomato.png')}
          style={styles.tomato}
        />
        <Text style={styles.detailsText}>{reviews}</Text>
      </View>
    </View>
  );
};

const WhereToWatch = ({ providers }) => {
  return (
    <View style={styles.content}>
      <Text
        style={{
          ...styles.movieDetails,
          ...styles.detailsText,
          ...styles.watchText
        }}
      >
        Where to watch:
      </Text>
      <View style={{ ...styles.row, ...styles.tiles }}>
        {providers.length > 0 ? (
          providers.map(item => (
            <Image
              key={item.id}
              source={{ uri: item.icon }}
              style={styles.providerLogo}
            />
          ))
        ) : (
          <Text style={styles.detailsText}>Not available yet</Text>
        )}
      </View>
    </View>
  );
};

export const MovieInfoSection = ({ movieInfo, providers }) => {
  const genre =
    movieInfo.genres.length > 0 ? movieInfo.genres[0].name : 'Other';
  const year = movieInfo.release_date.split('-')[0];
  const durationHours = Math.floor(movieInfo.runtime / 60);
  const durationMinutes = movieInfo.runtime % 60;
  const reviews =
    movieInfo.vote_count > 0 ? `${movieInfo.vote_average * 10}%` : 'No votes';

  return (
    <View style={styles.container}>
      <View style={styles.hairlineDivider}>
        <MovieDetails
          item={movieInfo}
          title={movieInfo.title}
          genre={genre}
          year={year}
          durationHours={durationHours}
          durationMinutes={durationMinutes}
          reviews={reviews}
        />
        {providers.length > 0 ? <WhereToWatch providers={providers} /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  content: {
    marginBottom: 16
  },
  starSection: {
    justifyContent: 'space-between'
  },
  hairlineDivider: {
    paddingBottom: 5,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    marginBottom: 16
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  detailsText: {
    fontSize: 16,
    color: '#5C5C5C'
  },
  watchText: {
    fontWeight: '600'
  },
  movieDetails: {
    marginBottom: 16
  },
  tomato: {
    width: 23,
    height: 22,
    marginRight: 8
  },
  providerLogo: {
    height: 50,
    width: 90,
    marginHorizontal: 10,
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row'
  },
  tiles: {
    flexWrap: 'wrap'
  },
  separator: {
    marginHorizontal: 12
  },
  rating: {
    paddingHorizontal: 4,
    borderColor: '#5C5C5C',
    borderWidth: 1,
    borderRadius: 4
  }
});

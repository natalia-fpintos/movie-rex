import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';


export const MovieInfoSection = ({ movieInfo, providers }) => {
  const genre = movieInfo.genres[0].name;
  const year = movieInfo.release_date.split('-')[0];
  const durationHours = Math.floor(movieInfo.runtime / 60);
  const durationMinutes = movieInfo.runtime % 60;
  const reviews = movieInfo.vote_count > 0 ? `${movieInfo.vote_average * 10}%` : 'No votes';

  return (
    <View style={styles.container}>
      <View style={styles.hairlineDivider}>
        <View style={styles.content}>
          <Text style={styles.movieTitle}>{ movieInfo.title }</Text>
          <View style={styles.row}>
            <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>{genre}</Text>
            <Text style={{ ...styles.detailsText, ...styles.separator }}>•</Text>
            <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>{year}</Text>
            <Text style={{ ...styles.detailsText, ...styles.separator }}>•</Text>
            <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>{durationHours}h {durationMinutes}m</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../../images/tomato.png')} style={styles.tomato} />
            <Text style={styles.detailsText}>{reviews}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={{ ...styles.movieDetails, ...styles.detailsText }}>Where to watch:</Text>
          <FlatList
            data={providers}
            numColumns={3}
            keyExtractor={({ item, index }) => index}
            renderItem={item => <Image source={{ uri: item.item.icon }} style={styles.providerLogo} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  content: {
    marginHorizontal: 8,
    marginBottom: 32
  },
  hairlineDivider: {
    paddingBottom: 5,
    paddingLeft: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4'
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  detailsText: {
    fontSize: 16,
    color: '#5C5C5C',
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
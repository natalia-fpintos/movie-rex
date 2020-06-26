import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HighlightsPage } from './js/highlights/highlights-page.js';
import { AssetPage } from './js/asset/asset-page.js';
import { GenresPage } from './js/genres/genres-page.js';
import { ResultsPage } from './js/results/results-page.js';
import { SearchPage } from './js/search/search-page.js';
import { WatchlistPage } from './js/watchlist/watchlist-page.js';

import { enableScreens } from 'react-native-screens';

enableScreens();

const Tab = createBottomTabNavigator();

const HighlightsStack = createNativeStackNavigator();
const GenresStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const WatchlistStack = createNativeStackNavigator();

const HighlightsStackScreen = () => {
  return (
    <HighlightsStack.Navigator>
      <HighlightsStack.Screen
        options={{ headerLargeTitle: true }}
        name="Highlights"
        component={HighlightsPage}
      />
      <HighlightsStack.Screen
        name="Asset"
        component={AssetPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </HighlightsStack.Navigator>
  );
};

const GenresStackScreen = () => {
  return (
    <GenresStack.Navigator>
      <GenresStack.Screen
        options={{ headerLargeTitle: true }}
        name="Genres"
        component={GenresPage}
      />
      <GenresStack.Screen
        name="SearchResults"
        component={ResultsPage}
        options={({ route }) => ({ title: route.params.genre })}
      />
      <GenresStack.Screen
        name="Asset"
        component={AssetPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </GenresStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{ headerLargeTitle: true }}
        name="Search"
        component={SearchPage}
      />
      <SearchStack.Screen
        name="SearchResults"
        component={ResultsPage}
        options={({ route }) => ({ title: route.params.searchTerm })}
      />
      <SearchStack.Screen
        name="Asset"
        component={AssetPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </SearchStack.Navigator>
  );
};

const WatchlistStackScreen = () => {
  return (
    <WatchlistStack.Navigator>
      <WatchlistStack.Screen
        options={{ headerLargeTitle: true }}
        name="Watchlist"
        component={WatchlistPage}
      />
      <WatchlistStack.Screen
        name="Asset"
        component={AssetPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </WatchlistStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Highlights':
                iconName = 'ios-tv';
                break;
              case 'Search':
                iconName = 'ios-search';
                break;
              case 'Genres':
                iconName = 'ios-film';
                break;
              case 'Watchlist':
                iconName = 'ios-star-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#2daeeb',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Highlights" component={HighlightsStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Genres" component={GenresStackScreen} />
        <Tab.Screen name="Watchlist" component={WatchlistStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HighlightsPage } from './js/highlights/highlights-page.js';
import { AssetPage } from './js/asset/asset-page.js';
import { GenresPage } from './js/genres/genres-page.js';

import { enableScreens } from 'react-native-screens';

enableScreens();

const Tab = createBottomTabNavigator();

const HighlightsStack = createNativeStackNavigator();

const HighlightsStackScreen = () => {
  return (
    <HighlightsStack.Navigator>
      <HighlightsStack.Screen
        options={{ headerLargeTitle: true }}
        name="Highlights"
        component={HighlightsPage}
      />
      <HighlightsStack.Screen name="Asset" component={AssetPage} options={({ route }) => ({ title: route.params.name })} />
    </HighlightsStack.Navigator>
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
                iconName = 'ios-bookmark';
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
        <Tab.Screen name="Genres" component={GenresPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

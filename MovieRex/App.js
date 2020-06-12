import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HighlightsPage } from './js/highlights/highlights-page.js';
import { GenresPage } from './js/genres/genres-page.js';

const Tab = createBottomTabNavigator();

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
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2daeeb',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Highlights" component={HighlightsPage} />
        <Tab.Screen name="Genres" component={GenresPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

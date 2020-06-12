import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HighlightsPage } from './js/highlights/highlights-page.js';
import { GenresPage } from './js/genres/genres-page.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Highlights" component={HighlightsPage} />
        <Tab.Screen name="Genres" component={GenresPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

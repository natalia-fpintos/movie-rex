import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HighlightsPage } from './js/highlights/highlights-page.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Highlights" component={HighlightsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

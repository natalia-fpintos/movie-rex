import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { HighlightsPage } from './js/highlights/highlights-page.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HighlightsPage />
      </SafeAreaView>
    </>
  );
};

export default App;

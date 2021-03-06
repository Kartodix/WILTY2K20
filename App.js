import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import Home from './screens/home';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'source-sans-pro-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'source-sans-pro-bold-italic': require('./assets/fonts/SourceSansPro-BoldItalic.ttf'),
    'museo-moderno-extrabold': require('./assets/fonts/MuseoModerno-ExtraBold.ttf'),
    'roboto-bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
    'modak': require('./assets/fonts/Modak-Regular.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    )
  }
}
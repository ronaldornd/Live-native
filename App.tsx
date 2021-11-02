import React from 'react';
import { Home } from './src/screens/Home';
import {useFonts, SansitaSwashed_400Regular, SansitaSwashed_700Bold } from '@expo-google-fonts/sansita-swashed'
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] =useFonts({
    SansitaSwashed_400Regular,
    SansitaSwashed_700Bold
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <AuthProvider>
    <StatusBar style='light'/>
    <Home/>
    </AuthProvider>
  );
}


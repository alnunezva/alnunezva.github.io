import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/AuthContext';
import { AlertProvider } from './src/contexts/AlertContext';
import { ReportProvider } from './src/contexts/ReportContext';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import { useAuth } from './src/hooks/useAuth';

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

function Main() {
  const { user } = useAuth();

  return (
    <AlertProvider>
      <ReportProvider>
        <NavigationContainer>
          {user ? <AppStack /> : <AuthStack />}
          <StatusBar style="auto" />
        </NavigationContainer>
      </ReportProvider>
    </AlertProvider>
  );
}

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AdminTabs from './AdminTabs';
import { useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAdmin ? (
        <Stack.Screen name="Admin" component={AdminTabs} />
      ) : (
        <Stack.Screen name="Main" component={BottomTabs} />
      )}
    </Stack.Navigator>
  );
}

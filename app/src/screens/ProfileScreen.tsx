import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/atoms/Button';
import { useAuth } from '../hooks/useAuth';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold mb-2">Perfil</Text>
      <Text>Nombre: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Button title="Cerrar sesión" onPress={logout} className="mt-4" />
    </View>
  );
}

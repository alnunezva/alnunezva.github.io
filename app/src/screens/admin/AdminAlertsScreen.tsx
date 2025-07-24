import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../components/atoms/Button';

export default function AdminAlertsScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const publish = () => {
    // enviar alerta al backend
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold mb-2">Publicar Alerta</Text>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} className="border border-gray-300 rounded px-3 py-2 mb-2" />
      <TextInput placeholder="Descripción" value={description} onChangeText={setDescription} className="border border-gray-300 rounded px-3 py-2 mb-2" />
      <Button title="Publicar" onPress={publish} />
    </View>
  );
}

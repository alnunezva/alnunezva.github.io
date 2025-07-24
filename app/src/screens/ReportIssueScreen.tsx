import React, { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import Button from '../components/atoms/Button';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useReports } from '../hooks/useReports';
import useLocation from '../hooks/useLocation';

export default function ReportIssueScreen() {
  const { create } = useReports();
  const region = useLocation();
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'baja' | 'media' | 'alta'>('baja');
  const [manyNeighbors, setManyNeighbors] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!res.canceled) setImage(res.assets[0].uri);
  };

  const submit = async () => {
    if (!region) return;
    await create({ description, lat: region.latitude, lng: region.longitude, severity, manyNeighbors, author: 'yo' });
  };

  if (!region) return <View />;

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold mb-2">Reportar Incidencia</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Detalles adicionales"
        value={description}
        onChangeText={setDescription}
        className="border border-gray-300 rounded px-3 py-2 mb-2"
      />
      <Picker selectedValue={severity} onValueChange={s => setSeverity(s)}>
        <Picker.Item label="Baja" value="baja" />
        <Picker.Item label="Media" value="media" />
        <Picker.Item label="Alta" value="alta" />
      </Picker>
      <View className="flex-row items-center my-2">
        <Text className="mr-2">¿Afecta a muchos vecinos?</Text>
        <Switch value={manyNeighbors} onValueChange={setManyNeighbors} />
      </View>
      <Button title="Adjuntar fotos" onPress={pickImage} variant="secondary" className="mb-2" />
      <Button title="Enviar Reporte" onPress={submit} />
    </View>
  );
}

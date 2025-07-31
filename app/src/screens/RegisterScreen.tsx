import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { useAuth } from '../hooks/useAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function RegisterScreen({ navigation }: NativeStackScreenProps<any>) {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    if (!email || !password) return;
    await register({ name, email, phone, password });
  };

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Registro</Text>
      <Input placeholder="Nombre" value={name} onChangeText={setName} />
      <Input placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <Input placeholder="Teléfono" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <Input placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Registrarse" onPress={onSubmit} />
      <Pressable onPress={() => navigation.navigate('Login')} className="mt-2">
        <Text className="text-blue-500">Iniciar sesión</Text>
      </Pressable>
    </View>
  );
}

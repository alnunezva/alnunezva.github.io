import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { useAuth } from '../hooks/useAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function LoginScreen({ navigation }: NativeStackScreenProps<any>) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async () => {
    if (!email || !password) return;
    const ok = await login(email, password);
    if (!ok) setError('Credenciales inválidas');
  };

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Iniciar Sesión</Text>
      <Input placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <Input placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
      {error ? <Text className="text-red-500 mb-2">{error}</Text> : null}
      <Button title="Iniciar sesión" onPress={onSubmit} />
      <Pressable onPress={() => navigation.navigate('Register')} className="mt-2">
        <Text className="text-blue-500">¿Eres nuevo? Regístrate</Text>
      </Pressable>
    </View>
  );
}

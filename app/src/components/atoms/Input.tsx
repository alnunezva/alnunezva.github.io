import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      className="border border-gray-300 rounded px-3 py-2 mb-2"
      placeholderTextColor="#666"
      {...props}
    />
  );
}

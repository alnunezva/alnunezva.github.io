import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends PressableProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ title, variant = 'primary', className, ...props }: Props) {
  const base = 'px-4 py-2 rounded';
  const variants = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
  };
  return (
    <Pressable accessibilityRole="button" hitSlop={8} className={twMerge(base, variants[variant], className)} {...props}>
      <Text className="text-white text-center font-semibold">{title}</Text>
    </Pressable>
  );
}

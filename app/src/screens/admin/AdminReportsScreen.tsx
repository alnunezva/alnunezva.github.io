import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useReports } from '../../hooks/useReports';

export default function AdminReportsScreen() {
  const { reports } = useReports();

  return (
    <View className="flex-1 p-4 bg-white">
      <FlatList
        data={reports}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View className="border-b border-gray-200 py-2">
            <Text>#{item.id} - {item.severity}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

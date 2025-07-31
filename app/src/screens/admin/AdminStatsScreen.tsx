import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function AdminStatsScreen() {
  const data = {
    labels: ['L', 'M', 'X', 'J', 'V'],
    datasets: [{ data: [5, 2, 3, 1, 4] }],
  };
  return (
    <View className="flex-1 p-4 bg-white">
      <BarChart data={data} width={Dimensions.get('window').width - 32} height={220} yAxisLabel="" chartConfig={{
        backgroundColor: '#fff', backgroundGradientFrom: '#fff', backgroundGradientTo: '#fff', decimalPlaces: 0,
        color: () => `rgba(59,130,246,1)`, labelColor: () => '#000'
      }} />
    </View>
  );
}

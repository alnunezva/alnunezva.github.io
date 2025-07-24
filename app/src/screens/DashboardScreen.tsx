import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import { useAlerts } from '../hooks/useAlerts';
import { useReports } from '../hooks/useReports';
import useLocation from '../hooks/useLocation';
import MapWithMarkers from '../components/organisms/MapWithMarkers';
import { Alert, Report } from '../types';

export default function DashboardScreen() {
  const { alerts } = useAlerts();
  const { reports } = useReports();
  const region = useLocation();
  const [selected, setSelected] = useState<{ item: Alert | Report; type: 'alert' | 'report' } | null>(null);

  if (!region) return <View />;

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold mb-2">Alertas del Proveedor</Text>
      <MapWithMarkers region={region} alerts={alerts} reports={reports} onSelect={setSelected} />
      <Modal visible={!!selected} transparent animationType="slide">
        <View className="flex-1 justify-center items-center bg-black/50 p-4">
          <View className="bg-white p-4 rounded w-full">
            <Text className="font-bold text-lg mb-2">{selected?.type === 'alert' ? 'Alerta' : 'Reporte'}</Text>
            <Text>Autor: {selected?.item.author}</Text>
            {'description' in (selected?.item || {}) && <Text>Descripción: {selected?.item.description}</Text>}
            {'eta' in (selected?.item || {}) && <Text>ETA: {selected?.item.eta}</Text>}
            <Text onPress={() => setSelected(null)} className="text-blue-500 mt-2">Cerrar</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

import React from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import { Alert, Report } from '../../types';
import { View } from 'react-native';

interface Props {
  region: Region;
  alerts: Alert[];
  reports: Report[];
  onSelect: (item: Alert | Report, type: 'alert' | 'report') => void;
}

export default function MapWithMarkers({ region, alerts, reports, onSelect }: Props) {
  return (
    <View className="h-60 w-full mb-4">
      <MapView style={{ flex: 1 }} initialRegion={region}>
        {alerts.map((a) => (
          <Marker
            key={`alert-${a.id}`}
            coordinate={{ latitude: a.lat, longitude: a.lng }}
            pinColor="red"
            onPress={() => onSelect(a, 'alert')}
          />
        ))}
        {reports.map((r) => (
          <Marker
            key={`report-${r.id}`}
            coordinate={{ latitude: r.lat, longitude: r.lng }}
            pinColor="blue"
            onPress={() => onSelect(r, 'report')}
          />
        ))}
      </MapView>
    </View>
  );
}

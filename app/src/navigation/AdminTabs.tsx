import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AdminAlertsScreen from '../screens/admin/AdminAlertsScreen';
import AdminReportsScreen from '../screens/admin/AdminReportsScreen';
import AdminStatsScreen from '../screens/admin/AdminStatsScreen';

const Tab = createMaterialTopTabNavigator();

export default function AdminTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Alertas" component={AdminAlertsScreen} />
      <Tab.Screen name="Reportes" component={AdminReportsScreen} />
      <Tab.Screen name="Estadísticas" component={AdminStatsScreen} />
    </Tab.Navigator>
  );
}

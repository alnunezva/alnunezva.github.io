import React, { createContext, useState, useEffect } from 'react';
import { Alert } from '../types';
import { getAlerts } from '../api/api';

interface AlertContextProps {
  alerts: Alert[];
  refresh: () => Promise<void>;
}

export const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const refresh = async () => {
    const { data } = await getAlerts();
    setAlerts(data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, refresh }}>
      {children}
    </AlertContext.Provider>
  );
};

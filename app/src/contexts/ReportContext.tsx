import React, { createContext, useState, useEffect } from 'react';
import { Report } from '../types';
import { getReports, postReport } from '../api/api';

interface ReportContextProps {
  reports: Report[];
  refresh: () => Promise<void>;
  create: (data: Omit<Report, 'id' | 'status' | 'author'>) => Promise<void>;
}

export const ReportContext = createContext<ReportContextProps>({} as ReportContextProps);

export const ReportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([]);

  const refresh = async () => {
    const { data } = await getReports();
    setReports(data);
  };

  const create = async (data: Omit<Report, 'id' | 'status' | 'author'>) => {
    await postReport(data);
    refresh();
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <ReportContext.Provider value={{ reports, refresh, create }}>
      {children}
    </ReportContext.Provider>
  );
};

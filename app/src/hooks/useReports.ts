import { useContext } from 'react';
import { ReportContext } from '../contexts/ReportContext';

export const useReports = () => useContext(ReportContext);

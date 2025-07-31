import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getAlerts = () => api.get('/alerts');
export const getReports = () => api.get('/reports');
export const postReport = (data: any) => api.post('/reports', data);

export default api;

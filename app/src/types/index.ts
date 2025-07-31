export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  password: string;
}

export interface Alert {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  eta: string;
  author: string;
}

export interface Report {
  id: number;
  description: string;
  lat: number;
  lng: number;
  severity: 'baja' | 'media' | 'alta';
  manyNeighbors: boolean;
  status: string;
  author: string;
}

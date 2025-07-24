import { User } from '../types';

const users: User[] = [
  { id: 1, name: 'Admin', email: 'admin@example.com', phone: '123456', role: 'admin', password: 'admin' },
  { id: 2, name: 'User', email: 'user@example.com', phone: '987654', role: 'user', password: 'user' },
];

export const authenticate = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

export const registerUser = (data: Omit<User, 'id' | 'role'>): User => {
  const newUser: User = { ...data, id: Date.now(), role: 'user' };
  users.push(newUser);
  return newUser;
};

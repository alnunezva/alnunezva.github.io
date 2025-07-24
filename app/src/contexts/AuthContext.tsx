import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types';
import { authenticate, registerUser } from '../services/authService';
import { loadUser, saveUser, clearUser } from '../services/storageService';

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: Omit<User, 'id' | 'role'>) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const stored = await loadUser();
      if (stored) setUser(stored);
    })();
  }, []);

  const login = async (email: string, password: string) => {
    const found = authenticate(email, password);
    if (found) {
      setUser(found);
      await saveUser(found);
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    await clearUser();
  };

  const register = async (data: Omit<User, 'id' | 'role'>) => {
    const newUser = registerUser(data);
    setUser(newUser);
    await saveUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

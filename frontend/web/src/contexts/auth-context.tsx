'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchUser = useCallback(async (token: string) => {
    try {
      const response = await axios.get('http://localhost:3333/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    } else {
      setIsLoading(false);
    }
  }, [fetchUser]);

  const login = async (token: string) => {
    localStorage.setItem('token', token);
    await fetchUser(token);
    router.push('/today');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/sign-in');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

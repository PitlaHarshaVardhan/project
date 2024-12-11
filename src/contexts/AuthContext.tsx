import { createContext, useContext, useState, ReactNode } from 'react';
import { User, LoginCredentials, AuthContextType } from '../types/auth';
import axios from 'axios';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      // In a real app, this would be your API endpoint
      const response = await axios.post('/api/login', credentials);
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('token', userData.token);
    } catch (err) {
      setError('Invalid credentials');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
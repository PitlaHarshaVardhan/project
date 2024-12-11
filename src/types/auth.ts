export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'business';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}
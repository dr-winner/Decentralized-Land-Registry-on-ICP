import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  isAuthenticated: boolean;
  identity: any;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [identity, setIdentity] = useState(null);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);

  useEffect(() => {
    initAuth();
  }, []);

  async function initAuth() {
    try {
      const client = await AuthClient.create();
      setAuthClient(client);

      const authenticated = await client.isAuthenticated();
      setIsAuthenticated(authenticated);

      if (authenticated) {
        const identity = client.getIdentity();
        setIdentity(identity);
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
    }
  }

  async function login() {
    try {
      if (!authClient) return;

      await new Promise((resolve, reject) => {
        authClient.login({
          identityProvider: process.env.DFX_NETWORK === 'ic' 
            ? 'https://identity.ic0.app'
            : `http://localhost:4943/?canisterId=${process.env.INTERNET_IDENTITY_CANISTER_ID}`,
          onSuccess: () => {
            setIsAuthenticated(true);
            setIdentity(authClient.getIdentity());
            toast.success('Successfully logged in!');
            resolve(true);
          },
          onError: (error) => {
            console.error('Login error:', error);
            toast.error('Failed to login. Please try again.');
            reject(error);
          }
        });
      });
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to login. Please try again.');
    }
  }

  async function logout() {
    try {
      if (!authClient) return;
      
      await authClient.logout();
      setIsAuthenticated(false);
      setIdentity(null);
      toast.success('Successfully logged out!');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout. Please try again.');
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, identity, login, logout }}>
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
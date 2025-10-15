import {createContext, type PropsWithChildren, useEffect, useState} from "react";
import {type User, users} from "@/09-useContext/data/user-mock.data.ts";
import {toast} from "sonner";

// interface UserContextProps {
//   children: React.ReactNode
// }

interface UserContextProps {
  authStatus: AuthStatus;
  user: User | null;
  login: (userId: number) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log({userId});
    const user = users.find(user => user.id === userId);
    if (!user) {
      console.log('User not found');
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }
    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  }

  const handleLogout = () => {
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setAuthStatus('not-authenticated');
      toast.info('Usuario no autenticado');
      return;
    }
    handleLogin(+userId);
  }, [])

  return <UserContext value={{
    authStatus,
    isAuthenticated: authStatus === 'authenticated',
    user,
    login: handleLogin,
    logout: handleLogout
  }}>{children}</UserContext>;
}
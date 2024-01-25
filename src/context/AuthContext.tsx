// UserContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
  fullname: string;
  password: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

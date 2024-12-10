'use client'

import { useUserSession } from '@/hooks/useUserSession';
import { User } from 'firebase/auth'
import { createContext } from 'react';

export const AuthContext = createContext<{
  user: User | null
}>({
  user: null
})

export function AuthWrapper({
  children,
  currentUser
}: Readonly<{
  children: React.ReactNode;
  currentUser: User | null
}>) {
	const user = useUserSession(currentUser)

  return (
    <AuthContext.Provider value={{
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
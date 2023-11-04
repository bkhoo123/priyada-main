"use client"
import UserContextProvider from "./UserContext";

export function Providers({ children}) {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  )
}
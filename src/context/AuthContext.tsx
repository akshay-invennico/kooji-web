'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type AuthView = 'login' | 'signup' | 'forgot-password' | 'reset-password' | 'verify-otp'

interface AuthContextType {
  isOpen: boolean
  view: AuthView
  openModal: (view: AuthView) => void
  closeModal: () => void
  setView: (view: AuthView) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<AuthView>('login')

  const openModal = (initialView: AuthView) => {
    setView(initialView)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <AuthContext.Provider value={{ isOpen, view, openModal, closeModal, setView }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthModal = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthProvider')
  }
  return context
}

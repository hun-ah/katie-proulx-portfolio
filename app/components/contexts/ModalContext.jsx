'use client';
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);

  const value = {
    openContactModal,
    setOpenContactModal,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useAppContext = () => useContext(ModalContext);

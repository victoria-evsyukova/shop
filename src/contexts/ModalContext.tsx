// contexts/ModalContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalContextType {
  modalBusket: boolean;
  openBusket: () => void;
  closeBusket: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalBusket, setModalBusket] = useState(false);

  const openBusket = () => setModalBusket(true);
  const closeBusket = () => setModalBusket(false);

  return (
    <ModalContext.Provider value={{ modalBusket, openBusket, closeBusket }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
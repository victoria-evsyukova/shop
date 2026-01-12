import './App.css';
import '@mantine/core/styles.css'
import Page from '../pages/Page'
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import { ModalProvider } from '../contexts/ModalContext';
import CardDetails from '../features/cardDetails/CardDetails';


function App() {
  return (
    <MantineProvider theme={theme}>
      <ModalProvider> 
        <HashRouter>
          <Routes>
            <Route path='/' element={<AppLayout />} >
              <Route index element={<Navigate to='/products/all-categories' />} />
              <Route path='products/:category' element={<Page />} />
              <Route path='products/:category/:name' element={<CardDetails />} />
            </Route>
          </Routes>
        </HashRouter>
      </ModalProvider>    
    </MantineProvider>
  )
}

export default App

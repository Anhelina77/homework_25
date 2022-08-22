import React from 'react';
import './styles.css';
import { ContextProvider } from './contexts/ContextProvider';
import { Home } from 'pages/Home';

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

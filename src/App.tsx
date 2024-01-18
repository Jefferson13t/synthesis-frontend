import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css';
import Router from './router';

function App() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
}

export default App;

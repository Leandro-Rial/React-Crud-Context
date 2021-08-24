import React from 'react';
import { UserProvider } from './context/GlobalState';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;

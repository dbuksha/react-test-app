import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// common components
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { Routes } from './router/Routes';

// stores
import { AlertStateProvider } from './context/alert/AlertStore';
import { FirebaseStateProvider } from './context/firebase/FirebaseStore';

function App() {
  return (
    <FirebaseStateProvider>
      <AlertStateProvider>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes />
          </div>
        </Router>
      </AlertStateProvider>
    </FirebaseStateProvider>
  );
}

export default App;

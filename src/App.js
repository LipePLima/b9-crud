import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/routes'
import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    console.log(loggedIn)
  }

  return (
    <BrowserRouter>
      <Routers isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
    </BrowserRouter>
    
  );
};

export default App;

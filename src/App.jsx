import React, { useEffect, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then(balance => {
        setBalance(balance / 1e9);
      });
    }
  }, [publicKey, connection]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <button 
          onClick={toggleDarkMode} 
          className="absolute bottom-4 left-4 p-2 rounded"
        >
          {isDarkMode ? <SunIcon className="h-6 w-6 text-white" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
        </button>

        <h1 className="text-3xl absolute top-7 left-4 font-bold mb-4">BLOCKid</h1>
      {publicKey ? (
        <div className="text-center">
          

          <Link to='/profile'>
          <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>
            Proceedd
          </button>
        </Link>
        </div>
      ) : (
        <Home />
      )}

        <div className='absolute top-4 right-4'>
          <WalletMultiButton className="mb-4" />
        </div>

        

        <Routes>
          
          <Route path="/profile" element={<Profile />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;

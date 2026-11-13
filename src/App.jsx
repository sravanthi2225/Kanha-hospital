import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Home from './pages/Home';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* 1.2s Logo fade/scale preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Main Single-Page Home Application */}
      <Home />
    </>
  );
}

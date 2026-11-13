import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] transition-all duration-75 ease-out shadow-sm"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}


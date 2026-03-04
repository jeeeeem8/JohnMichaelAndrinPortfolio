import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setWidth(`${scrolled}%`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 w-full z-50 bg-transparent">
      <div className="h-full bg-gradient-to-r from-emerald-600 to-green-800" style={{ width }} />
    </div>
  );
}

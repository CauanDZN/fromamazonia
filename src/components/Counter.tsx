'use client'

import React, { useState, useEffect } from 'react';

export function Counter() {
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [treesCut, setTreesCut] = useState(72130714);

  useEffect(() => {
    const interval = setInterval(() => {
      setTreesCut(prevCount => prevCount + getRandomNumber(10, 50));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='items-center text-center'>
      <h1>Contador de Árvores Cortadas</h1>
      <p className="text-4xl font-bold transition-opacity animate-fade-in">
        {treesCut}
      </p>
    </div>
  );
}
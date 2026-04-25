import React, { createContext, useContext } from 'react';

const SkeletonContext = createContext({
  theme: 'light',
  animation: 'pulse',
});

export function SkeletonProvider({ children, theme = 'light', animation = 'pulse' }) {
  return (
    <SkeletonContext.Provider value={{ theme, animation }}>
      {children}
    </SkeletonContext.Provider>
  );
}

export const useSkeleton = () => useContext(SkeletonContext);
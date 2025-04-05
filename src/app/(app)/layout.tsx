import React from 'react';

import NavBar from '@/components/nav-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

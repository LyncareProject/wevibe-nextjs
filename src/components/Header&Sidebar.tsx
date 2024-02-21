'use client';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const HeaderSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} close={() => setIsSidebarOpen(false)} />
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default HeaderSidebar;

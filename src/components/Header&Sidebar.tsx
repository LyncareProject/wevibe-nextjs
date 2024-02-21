'use client';
import { User } from '@prisma/client';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type HeaderSidebarProps = {
  currentUser?: User | null;
};

const HeaderSidebar = ({ currentUser }: HeaderSidebarProps) => {
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

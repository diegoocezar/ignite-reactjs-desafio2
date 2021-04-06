import { useEffect, useState } from 'react';



import { SideBar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { ProviderMovies } from './ContextMovies';

export function App() {
  
  return (
    <ProviderMovies>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </ProviderMovies>
  )
}
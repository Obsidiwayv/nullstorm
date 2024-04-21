import SideBar from './components/SideBar';

import { getVersionBanner } from './utils/versions';

import CardBanners from "./assets/RDT_20240223_2028144252604940621275460.jpg";
import { resourceDir } from '@tauri-apps/api/path';
import { BaseDirectory, exists } from '@tauri-apps/api/fs';
import { dir } from 'console';
import { compilePallets } from './Files';

function App() {
  compilePallets();
  return (
    <div>
      <SideBar />
    </div>
  )
}

export default App

import SideBar from './components/SideBar';

import { getVersionBanner } from './utils/versions';

import CardBanners from "./assets/RDT_20240223_2028144252604940621275460.jpg";
import { WithTheme } from './Modes';

function App() {
  return (
      <div>
        <SideBar />
        <div style={{ background: "black" }} className='navbar min-h-screen flex flex-col text-white flex-1'>
          
        </div>
      </div>
  )
}

export default App

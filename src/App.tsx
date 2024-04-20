import SideBar from './components/SideBar';
import { useSpectrum } from './spectrum'

import "@spectrum-css/card";
import "@spectrum-css/fieldgroup";
import "@spectrum-css/asset";
import { getVersionBanner } from './utils/versions';

function App() {
  useSpectrum();
  return (
    <div style={{ display: 'flow' }}>
      <SideBar />
      <div style={{ flex: 4, padding: '5px', justifyContent: 'space-around' }}>
        <div className="spectrum-Asset">
          {/** style="max-width: 75%; max-height: 75%; object-fit: contain;" */}
          <img
            className="spectrum-Asset-image"
            src={getVersionBanner()}
            style={{
              height: "300px",
              objectFit: "contain",
              maxHeight: "75%",
              maxWidth: "75%"
            }}
          />
        </div>
        <div style={{ padding: "15px", display: 'flex', justifyContent: 'space-around' }}>

          <button className="spectrum-Button spectrum-Button--fill spectrum-Button--secondary spectrum-Button--sizeXL" style={{ marginBottom: '40px' }}>
            <span className="spectrum-Button-label">Launch</span>
          </button>
        </div>

        {/* Versions and such... */}
        <div style={{ padding: "15px", display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <div>
              <div>Thats crazy</div>
              <div>💀</div>
            </div>
            <div>
              <input type="checkbox" className="spectrum-Checkbox-input" id="example-checkbox" />
              <label className="spectrum-Checkbox-label" htmlFor="example-checkbox">Check me</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

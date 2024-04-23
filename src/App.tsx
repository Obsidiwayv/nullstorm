import SideBar from './components/SideBar';

import { getVersionBanner } from './utils/versions';

import { Play24Filled, Dismiss24Regular } from '@fluentui/react-icons';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { events } from './Global';

function App() {
  const [playButtonState, updatePlayButton] = useState<PlayButtonState>("disabled");
  const [profile, updateProfile] = useState<ProfileManifest>();
  useEffect(() => {
    events.on("profile", (manifest) => console.log(manifest));

    return () => events.off("profile", () => { });
  }, []);
  return (
    <div>
      <SideBar />
      <div className='home min-h-screen flex flex-col text-white flex-1'>
        <div className='grid grid-cols-2 pt-6'>
          <div className='place-self-center text-xl'>
            <h1>1.20.4</h1>
            <h1>Fabric</h1>
          </div>
          <div className=''>
            <img src={getVersionBanner()} className='max-w-md mx-auto rounded-xl' />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-end p-6">
          <div>
            <div>
              <Button
                size="lg"
                color={playButtonState === "disabled" ? "danger" : "success"}
                variant="bordered"
                disabled={playButtonState === "disabled"}
                endContent={
                  playButtonState === "disabled"
                    ? <Dismiss24Regular />
                    : <Play24Filled />}>Launch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

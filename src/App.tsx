import SideBar from './components/SideBar';

import { getVersionBanner, isSnapshot } from './utils/versions';

import { Play24Filled, Dismiss24Regular } from '@fluentui/react-icons';
import { Button, Chip } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { events } from './Global';
import { appConfigDir } from '@tauri-apps/api/path';

function App() {
  console.log(appConfigDir())
  const [playButtonState, updatePlayButton] = useState<PlayButtonState>("disabled");
  const [profile, updateProfile] = useState<ProfileManifest>(Object.assign({}));
  useEffect(() => {
    events.on("profile", (manifest) => updateProfile(manifest));

    return () => events.off("profile", () => { });
  }, []);

  profile.lastVersionId = profile.lastVersionId ?? "1.20.4";

  return (
    <div>
      <div className='static home min-h-screen flex flex-col text-white flex-1'>
        <div className='pt-6 pl-60 flex justify-around'>
          <SideBar />
          <div className='absolute top-0 right-0 pr-6 pt-6'>
            <div>
              <img src={getVersionBanner()} className='max-w-sm mx-auto rounded-xl' />
            </div>
            <div className='place-self-center text-xl text-center pt-6'>
              <h1>{profile.lastVersionId}</h1>
              <div className='pb-3'>
                {isSnapshot(profile.type ?? "")
                  ? <Chip variant='bordered' color='warning'>snapshot</Chip>
                  : ""}
              </div>
            </div>
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

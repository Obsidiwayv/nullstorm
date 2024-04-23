import { User } from "@nextui-org/react";
import { view } from "react-async-comp";
import { events } from "src/Global";
import GameProfiles from "src/mc/GameProfiles";


const GameProfileData = view(async () => {
  const profile_data = await GameProfiles.get();

  return (
    profile_data.map((data, index) => {
      const color = index % 2 === 0 ? "bg-slate-300/5" : "";
      return (
        <div key={index} className={`${color} w-full text-center pt-3 pb-3`}>
          <button onClick={() => GameProfileUpdate(data)}>{data.name === "" ? data.type : data.name}</button>
        </div>
      )
    })
  );
});

const GameProfileUpdate = (data: ProfileManifest) => {
  events.emit("profile", data);
}

export default function () {
  const padding = "p-6";
  return (
    <div className="fixed inset-y-0 left-0 w-18 navbar overflow-hidden">
      <div className="h-full flex flex-col justify-between">
        <div className="overflow-hidden">
          <div className={padding}>
            <User name="Cotton Eye Joe" />
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          <GameProfileData />
        </div>
      </div>
    </div>
  );
}
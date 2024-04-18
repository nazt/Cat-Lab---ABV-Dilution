"use client";
import { useState, FormEvent } from "react";

const Home: React.FC = () => {
  const [abvInitial, setAbvInitial] = useState<number>(38);
  const [volumeInitial, setVolumeInitial] = useState<number>(40);
  const [abvLow, setAbvLow] = useState<number>(5);
  const [abvTarget, setAbvTarget] = useState<number>(35);
  const [volumeNeeded, setVolumeNeeded] = useState<string>("");

  const calculateDilutionVolume = () => {
    if (abvTarget >= abvInitial || abvTarget <= abvLow) {
      setVolumeNeeded("Invalid ABV range");
      return;
    }
    const result =
      (abvInitial * volumeInitial - abvTarget * volumeInitial) /
      (abvTarget - abvLow);
    setVolumeNeeded(`${result.toFixed(2)}L`);
  };

  // This function is called whenever any input value changes
  const handleInputChange =
    (setter: (value: number) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.target.value) || 0;
      setter(value);
      calculateDilutionVolume();
    };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="p-8 rounded-xl bg-gray-800">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-white mb-2">Initial ABV (%):</label>
              <input
                type="number"
                className="p-2 bg-gray-700 text-white rounded border border-gray-600"
                value={abvInitial}
                onChange={handleInputChange(setAbvInitial)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">
                Initial Volume (liters):
              </label>
              <input
                type="number"
                className="p-2 bg-gray-700 text-white rounded border border-gray-600"
                value={volumeInitial}
                onChange={handleInputChange(setVolumeInitial)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Low ABV (%):</label>
              <input
                type="number"
                className="p-2 bg-gray-700 text-white rounded border border-gray-600"
                value={abvLow}
                onChange={handleInputChange(setAbvLow)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Target ABV (%):</label>
              <input
                type="number"
                className="p-2 bg-gray-700 text-white rounded border border-gray-600"
                value={abvTarget}
                onChange={handleInputChange(setAbvTarget)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2">Volume needed (liters):</label>
              <output className="p-2 bg-gray-700 text-white rounded border border-gray-600">
                {volumeNeeded}
              </output>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

"use client";

import { useState } from "react";

const Home: React.FC = () => {
  const [abvInitial, setAbvInitial] = useState<number>(38);
  const [volumeInitial, setVolumeInitial] = useState<number>(40);
  const [abvLow, setAbvLow] = useState<number>(5);
  const [abvTarget, setAbvTarget] = useState<number>(35);
  const [volumeNeeded, setVolumeNeeded] = useState<string>("");
  const [totalVolume, setTotalVolume] = useState<string>("");

  const calculateDilutionVolume = () => {
    console.log(
      `abvInitial: ${abvInitial}, volumeInitial: ${volumeInitial}, abvLow: ${abvLow}, abvTarget: ${abvTarget}`
    );

    if (abvTarget >= abvInitial || abvTarget <= abvLow) {
      setVolumeNeeded("Invalid ABV range");
      return;
    }
    const result =
      (abvInitial * volumeInitial - abvTarget * volumeInitial) /
      (abvTarget - abvLow);
    setVolumeNeeded(`${result.toFixed(2)}L`);
    setTotalVolume(`${volumeInitial + result.toFixed(2)}L`);
  };

  const handleInputChange =
    (setter: (value: number) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value)) {
        setter(value);
      }
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-2 py-4">
      <div className="p-8 rounded-xl bg-gray-800 w-full max-w-sm">
        <div className="space-y-6">
          {/* Each input field is accompanied by a label and it takes the user's input to update state */}
          <div className="flex flex-col">
            <label className="text-white mb-2 text-lg">Initial ABV (%):</label>
            <input
              type="number"
              className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
              value={abvInitial}
              onChange={handleInputChange(setAbvInitial)}
              style={{ minHeight: "50px" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2 text-lg">
              Initial Volume (liters):
            </label>
            <input
              type="number"
              className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
              value={volumeInitial}
              onChange={handleInputChange(setVolumeInitial)}
              style={{ minHeight: "50px" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2 text-lg">Low ABV (%):</label>
            <input
              type="number"
              className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
              value={abvLow}
              onChange={handleInputChange(setAbvLow)}
              style={{ minHeight: "50px" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2 text-lg">Target ABV (%):</label>
            <input
              type="number"
              className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
              value={abvTarget}
              onChange={handleInputChange(setAbvTarget)}
              style={{ minHeight: "50px" }}
            />
          </div>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={calculateDilutionVolume}
          >
            Calculate
          </button>
          <div className="flex flex-col">
            <label className="text-white mb-2 text-lg">
              Volume needed (liters):
            </label>
            <output
              className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
              style={{ minHeight: "50px" }}
            >
              {volumeNeeded}
            </output>
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2 text-lg">
              Total Volume (liters):
            </label>
            <output
              className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
              style={{ minHeight: "50px" }}
            >
              {totalVolume}
            </output>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

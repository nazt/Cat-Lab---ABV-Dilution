"use client";

import { use, useEffect, useState } from "react";

const Home: React.FC = () => {
  const [abvInitial, setAbvInitial] = useState<string>("38");
  const [volumeInitial, setVolumeInitial] = useState<string>("40");
  const [abvLow, setAbvLow] = useState<string>("0");
  const [abvTarget, setAbvTarget] = useState<string>("35");
  const [volumeNeeded, setVolumeNeeded] = useState<string>("");
  const [totalVolume, setTotalVolume] = useState<string>("");

  const calculateDilutionVolume = () => {
    const input = {
      abvInitial: parseFloat(abvInitial),
      volumeInitial: parseFloat(volumeInitial),
      abvLow: parseFloat(abvLow),
      abvTarget: parseFloat(abvTarget),
    };

    if (input.abvTarget >= input.abvInitial || input.abvTarget <= input.abvLow) {
      setVolumeNeeded("Invalid ABV range");
      return;
    }

    // check isnan
    if (Object.values(input).some((value) => isNaN(value))) {
      setVolumeNeeded("");
      setTotalVolume("");
      return;
    }


    const result = (input.abvInitial * input.volumeInitial - input.abvTarget * input.volumeInitial) / (input.abvTarget - input.abvLow);

    setVolumeNeeded(`${result.toFixed(2)}L`);
    setTotalVolume(`${volumeInitial + result.toFixed(2)}L`);
  };

  useEffect(() => {
    console.log(`abvInitial: ${abvInitial}, volumeInitial: ${volumeInitial}, abvLow: ${abvLow}, abvTarget: ${abvTarget}`)
    calculateDilutionVolume();
  }, [abvInitial, volumeInitial, abvLow, abvTarget]);

  const handleInputChange =
    (setter: (value: string) => void) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setter(value);
      };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black p-2 py-4">

        <div className="p-8 rounded-xl bg-gray-800 w-full max-w-sm">
          <h1 className="text-2xl text-white mb-6 text-center">
            ABV Dilution Calculator
          </h1>
          <div className="space-y-6">
            {/* Each input field is accompanied by a label and it takes the user's input to update state */}
            <div className="flex flex-col">

              <label className="text-white mb-2 text-lg">Initial ABV (%):</label>
              <input
                pattern="[0-9]*"
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
                pattern="[0-9]*"
                className="p-4 bg-gray-700 text-white rounded border border-gray-600 text-lg"
                value={volumeInitial}
                onChange={handleInputChange(setVolumeInitial)}
                style={{ minHeight: "50px" }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Water or Low ABV (%):</label>
              <input
                pattern="[0-9]*"
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
                pattern="[0-9]*"
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
    </>
  );
};

export default Home;

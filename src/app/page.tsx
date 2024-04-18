"use client";
import { useState, FormEvent } from 'react';

const Home: React.FC = () => {
  const [abvInitial, setAbvInitial] = useState<number>(60);
  const [volumeInitial, setVolumeInitial] = useState<number>(30);
  const [abvLow, setAbvLow] = useState<number>(0);
  const [abvTarget, setAbvTarget] = useState<number>(35);
  const [volumeNeeded, setVolumeNeeded] = useState<string>('');

  const calculateDilutionVolume = (event: FormEvent) => {
    event.preventDefault();
    if (abvTarget >= abvInitial || abvTarget <= abvLow) {
      alert("Invalid target ABV. It must be between the initial and low ABV.");
      return;
    }
    const result = (abvInitial * volumeInitial - abvTarget * volumeInitial) / (abvTarget - abvLow);
    setVolumeNeeded(`${result.toFixed(2)}L`);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-8 rounded-xl bg-gray-800">
        <form onSubmit={calculateDilutionVolume} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="initial-abv">Initial ABV (%):</label>
            <input
              id="initial-abv"
              type="number"
              className="p-2 bg-gray-700 text-white rounded border border-gray-600"
              value={abvInitial}
              onChange={(e) => setAbvInitial(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="initial-volume">Initial Volume (liters):</label>
            <input
              id="initial-volume"
              type="number"
              className="p-2 bg-gray-700 text-white rounded border border-gray-600"
              value={volumeInitial}
              onChange={(e) => setVolumeInitial(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="low-abv">Low ABV (%):</label>
            <input
              id="low-abv"
              type="number"
              className="p-2 bg-gray-700 text-white rounded border border-gray-600"
              value={abvLow}
              onChange={(e) => setAbvLow(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="target-abv">Target ABV (%):</label>
            <input
              id="target-abv"
              type="number"
              className="p-2 bg-gray-700 text-white rounded border border-gray-600"
              value={abvTarget}
              onChange={(e) => setAbvTarget(Number(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Calculate
          </button>
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="volume-needed">Volume needed (liters):</label>
            <output
              id="volume-needed"
              className="p-2 bg-gray-700 text-white rounded border border-gray-600"
            >
              {volumeNeeded}
            </output>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

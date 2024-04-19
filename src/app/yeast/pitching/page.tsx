import React from 'react';
export default function YeastPitchRateForm() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-600 p-8 rounded-md">
        <h1 className="text-lg font-bold mb-4">Yeast Pitch Rate:</h1>

        {/* Units */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Units:</label>
          <div>
            <label className="inline-flex items-center mr-6">
              <input type="radio" name="units" className="form-radio" />
              <span className="ml-2">US - Gallons / oz</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="units" className="form-radio" />
              <span className="ml-2">Metric - Liters / g</span>
            </label>
          </div>
        </div>

        {/* Sugar Scale */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Sugar Scale:</label>
          <div>
            <label className="inline-flex items-center mr-6">
              <input type="radio" name="sugar_scale" className="form-radio" />
              <span className="ml-2">Gravity (1.xxx)</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="sugar_scale" className="form-radio" />
              <span className="ml-2">Plato °P</span>
            </label>
          </div>
        </div>

        {/* Form inputs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-2">Wort Gravity (OG):</label>
            <input type="number" step="0.001" className="form-input mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Wort Volume:</label>
            <input type="number" className="form-input mt-1 block w-full" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Target Pitch Rate:</label>
          <select className="form-select block w-full mt-1">
            <option>Pro Brewer 0.75 (Ale)</option>
            {/* Add other options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Yeast Type:</label>
          <select className="form-select block w-full mt-1">
            <option>Liquid - 100B Packs / Vials</option>
            {/* Add other options here */}
          </select>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex-grow mr-2">
            <label className="block text-sm font-bold mb-2">Liquid Packs:</label>
            <input type="number" className="form-input mt-1 block w-full" />
          </div>
          <span className="text-sm">(packs/vials)</span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Mfg Date:</label>
          <input type="date" className="form-input mt-1 block w-full" />
          <span className="text-sm block mt-1">Date yeast pack was made.</span>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Viability:</label>
          <p className="text-sm">Yeast is 16 days old, the viability is estimated at 89%.</p>
        </div>


        {/* Submit button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </div>
    </div>
  );
}

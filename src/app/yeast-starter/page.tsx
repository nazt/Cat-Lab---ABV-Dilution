import React from 'react';

const YeastGrowthCalculator = () => {
  // Assume we have some state and handlers for the dropdowns and inputs

  return (
    <div className="bg-blue-200 p-5 min-h-screen flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-bold text-center mb-5">Growth</h2>
        
        <div className="space-y-4">
          <GrowthStep stepNumber="1st" />
          <GrowthStep stepNumber="2nd" />
          <GrowthStep stepNumber="3rd" />
        </div>

        <div className="text-center text-xs text-gray-500 mt-5">
          GitHub Project by Darran Boyd.<br/>
          Based on the Flash version by Dustin J. Sullivan (yeastcalc.com), then re-hosted at YeastCalculator.com by TallDan
        </div>
      </div>
    </div>
  );
};
const GrowthStep = ({ stepNumber }) => {
    // State and event handlers will go here
    
    return (
      <div className={`bg-white shadow-md p-4 rounded-lg mb-6`}>
        <div className="mb-3">
          <div className="font-bold text-lg">Step {stepNumber}</div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full md:w-1/3">
            <label htmlFor={`fieldMethodOfAeration${stepNumber}`} className="block text-sm font-medium text-gray-700">
              Method of Aeration
            </label>
            <select id={`fieldMethodOfAeration${stepNumber}`} className="mt-1 form-select block w-full border-gray-300 shadow-sm rounded-md">
              {/* Option elements */}
            </select>
          </div>
          <div className="px-2 w-full md:w-1/3">
            <label htmlFor={`fieldStarterVolume${stepNumber}`} className="block text-sm font-medium text-gray-700">
              Starter Volume [Litres]
            </label>
            <input type="number" id={`fieldStarterVolume${stepNumber}`} className="mt-1 form-input block w-full border-gray-300 shadow-sm rounded-md" />
          </div>
          {/* Repeat for the rest of your inputs */}
        </div>
      </div>
    );
  };
  
//   export default GrowthStep;

export default YeastGrowthCalculator;

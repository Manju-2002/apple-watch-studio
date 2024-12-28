import React from 'react';

function BandSelector({ onSelectBand }) {
  const bands = ['Solo Loop', 'Sport Band', 'Leather'];

  return (
    <div className="p-6 bg-dark rounded-lg">
      <h2 className="text-xl text-white mb-4">Choose Your Band</h2>
      <div className="flex space-x-4">
        {bands.map((band, index) => (
          <div
            key={index}
            onClick={() => onSelectBand(band)}
            className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors duration-300"
          >
            <h3 className="text-white">{band}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BandSelector;

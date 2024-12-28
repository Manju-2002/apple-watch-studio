import React from 'react';

function SizeSelector({ onSelectSize }) {
  const sizes = ['38mm', '42mm', '44mm'];

  return (
    <div className="p-6 bg-dark rounded-lg">
      <h2 className="text-xl text-white mb-4">Choose Your Size</h2>
      <div className="flex space-x-4">
        {sizes.map((size, index) => (
          <div
            key={index}
            onClick={() => onSelectSize(size)}
            className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors duration-300"
          >
            <h3 className="text-white">{size}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;

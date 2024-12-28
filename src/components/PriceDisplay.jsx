import React from 'react';

function PriceDisplay({ caseType, size, band }) {
  // Logic to calculate the price based on selected options
  const basePrice = 399; // Example base price in USD
  const casePrice = caseType === 'aluminum' ? 0 : caseType === 'titanium' ? 100 : 50;
  const sizePrice = size === '44mm' ? 50 : 0;
  const bandPrice = band === 'Leather' ? 80 : band === 'Sport Band' ? 30 : 0;
  const totalPrice = basePrice + casePrice + sizePrice + bandPrice;

  return (
    <div className="mt-8 bg-dark p-6 rounded-lg">
      <h2 className="text-xl text-white mb-4">Your Selected Customizations</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-white">Case: {caseType}</span>
          <span className="text-white">${casePrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white">Size: {size}</span>
          <span className="text-white">${sizePrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white">Band: {band}</span>
          <span className="text-white">${bandPrice}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span className="text-white">Total Price</span>
          <span className="text-white">${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default PriceDisplay;

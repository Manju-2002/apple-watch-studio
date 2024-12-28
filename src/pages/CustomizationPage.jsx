import React, { useState } from 'react';
import CaseSelector from '../components/CaseSelector';
import SizeSelector from '../components/SizeSelector';
import BandSelector from '../components/BandSelector';
import PriceDisplay from '../components/PriceDisplay';
import CollectionSwitcher from '../components/CollectionSwitcher';

function CustomizationPage() {
  const [selectedCase, setSelectedCase] = useState('aluminum');
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedBand, setSelectedBand] = useState('solo-loop');

  return (
    <div className="min-h-screen bg-bg-dark text-white p-8">
      <h1 className="text-4xl mb-6">Customize Your Apple Watch</h1>
      <div className="grid grid-cols-3 gap-6">
        <CaseSelector onSelectCase={setSelectedCase} />
        <SizeSelector onSelectSize={setSelectedSize} />
        <BandSelector onSelectBand={setSelectedBand} />
      </div>
      <CollectionSwitcher />
      <PriceDisplay caseType={selectedCase} size={selectedSize} band={selectedBand} />
    </div>
  );
}

export default CustomizationPage;

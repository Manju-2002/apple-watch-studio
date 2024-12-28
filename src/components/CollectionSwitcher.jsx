import React, { useState } from 'react';

function CollectionSwitcher() {
  const [collection, setCollection] = useState('Standard');

  return (
    <div>
      <h2 className="text-2xl font-medium">Select Collection</h2>
      <select
        value={collection}
        onChange={(e) => setCollection(e.target.value)}
        className="p-2 border rounded mt-2"
      >
        <option value="Standard">Standard</option>
        <option value="Nike">Nike</option>
        <option value="Hermès">Hermès</option>
      </select>
    </div>
  );
}

export default CollectionSwitcher;

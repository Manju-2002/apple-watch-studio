import React from 'react';
import { Link } from 'react-router-dom';
import CaseSelector from '../components/CaseSelector'; // Import CaseSelector component

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Apple Watch Studio</h1>
        <p className="mb-4">Create your style. Design the perfect watch for you.</p>

        {/* Link to navigate to the Customization page */}
        <Link to="/customize" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-300 mb-6">
          Start Customizing
        </Link>

        {/* Include the CaseSelector component here */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Choose Your Watch Case</h2>
          <CaseSelector />
        </div>
      </div>
    </div>
  );
}

export default Home;

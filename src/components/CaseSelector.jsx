const cases = [
    { name: 'Aluminum', imgUrl: 'https://yourdirectlink/aluminum.jpg' },
    { name: 'Titanium', imgUrl: 'https://yourdirectlink/titanium.jpg' },
    { name: 'Stainless Steel', imgUrl: 'https://yourdirectlink/steel.jpg' },
  ];
  
  function CaseSelector({ onSelectCase }) {
    return (
      <div>
        <h2 className="text-xl mb-4">Choose Your Case</h2>
        <div className="grid grid-cols-3 gap-4">
          {cases.map((watchCase, index) => (
            <div
              key={watchCase.name.toLowerCase()}  // Use the name or a unique identifier
              onClick={() => onSelectCase(watchCase.name.toLowerCase())}
              className="p-4 border rounded-lg hover:bg-accent cursor-pointer"
            >
              <h3 className="text-lg font-medium">{watchCase.name}</h3>
              {/* Display the image with dynamic alt text */}
              <div className="case-image mb-2">
                <img 
                  src="https://drive.google.com/file/d/1Zzt6ODkZ3NskcdCwkHWGcy3O9yqc5sWU/view?usp=sharing"
                  alt="Watch Case 1"
                  style={{ width: '200px', height: '200px' }}
                />
                <img src="https://drive.google.com/file/d/18t-2CcSTzD7Gsz2r2YYgmzc6pGe1gci7/view?usp=sharing"
                  alt="Watch Case 2" 
                  style={{ width: '200px', height: '200px' }}
                />
                <img src="https://drive.google.com/file/d/1lalW9Or7Pmhdn3LHulDO8rYfk1XEnjwE/view?usp=sharing" 
                  alt="Watch Case 1"
                  style={{ width: '200px', height: '200px' }}
                />
                <img src="https://drive.google.com/file/d/1T8SESvazWD7dv53R8TxmKff11TU3wzIt/view?usp=sharing" 
                  alt="Watch Case 2"
                  style={{ width: '200px', height: '200px' }}
                />
                <img src="https://drive.google.com/file/d/18ITwGYs70rTBQbod40CBsoh3Fo8_B8n4/view?usp=sharing"
                  alt="Watch Case 1"
                  style={{ width: '200px', height: '200px' }}
                />
                <img src="https://drive.google.com/file/d/1grOlAwR8zZJoQQ6Zz3S07xX-fdkRVZYa/view?usp=sharing"
                  alt="Watch Case 2"
                  style={{ width: '200px', height: '200px' }}
                />
                <img src="https://drive.google.com/file/d/18jsFVswKgOswmfKpvKhIQjB_qNS_wBM4/view?usp=sharing"
                  alt="Watch Case 1"
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CaseSelector;
  
import  { useState } from 'react';
import '../styles/HeroDropdown.css'
const HeroDropdown = (prop) => {
  const {options, displayText}= prop
    const [dropdown, setDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null)

  
    const handleSelectOption = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="dropdown-container">
        <div className="selected-option" onClick={() => setDropdown(!dropdown)}>
          {selectedOption ? selectedOption: displayText}
        </div>
        {dropdown && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default HeroDropdown;

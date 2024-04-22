import  { useState } from 'react';
import '../styles/HeroDropdown.css'
const HeroDropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null)

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  
    const handleSelectOption = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="dropdown-container">
        <div className="selected-option" onClick={() => setDropdown(!dropdown)}>
          {selectedOption && 'Select an option'}
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

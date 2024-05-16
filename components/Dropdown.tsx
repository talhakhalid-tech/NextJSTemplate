import React, { useState } from 'react';

/**
 * Interface for the Dropdown component props.
 */
interface IDropdown {
  label: string; // Label for the dropdown
  options: { label: string; value: string | number }[]; // Array of dropdown options
  selectedOption: string | number; // Currently selected option
  setSelectedOption: React.Dispatch<React.SetStateAction<string | number>>; // Function to set the selected option
}

/**
 * Dropdown component renders a dropdown select with options.
 * @param {IDropdown} props - The props for the Dropdown component.
 * @returns {JSX.Element} The Dropdown component.
 */
const Dropdown = ({
  label,
  options = [],
  selectedOption,
  setSelectedOption
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close

  // Toggle dropdown open/close
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left bg-inherit">
      <div className="flex items-center">
        <div style={{ whiteSpace: 'nowrap' }} className="mr-4 text-sm">
          {label}:
        </div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-inherit text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={handleToggle}
        >
          {options.find((option) => option.value === selectedOption)?.label ??
            ''}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          style={{ scrollbarWidth: 'none' }}
          className="origin-top-right absolute right-0 mt-2 w-36 max-h-64	overflow-y-auto rounded-md shadow-lg bg-inherit ring-1 ring-black ring-opacity-5"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option.value)}
                className="block w-full px-4 py-2 text-sm text-white bg-gray-900 hover:bg-gray-700"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

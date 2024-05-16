import React from 'react';

/**
 * Interface for the Checkbox component props.
 */
interface ICheckbox {
  label: string; // Label text for the checkbox
  checked: boolean; // Boolean indicating whether the checkbox is checked
  changeHandler: React.ChangeEventHandler<HTMLInputElement>; // Event handler for checkbox change event
}

/**
 * Checkbox component renders a checkbox input with a label.
 * @param {ICheckbox} props - The props for the Checkbox component.
 * @returns {JSX.Element} The Checkbox component.
 */
const Checkbox: React.FC<ICheckbox> = ({ label, checked, changeHandler }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        checked={checked}
        onChange={changeHandler}
        type="checkbox"
        className="form-checkbox h-5 w-5 text-white rounded-md border-gray-300 transition duration-150 ease-in-out cursor-pointer"
      />
      <span className="ml-2 text-white">{label}</span>
    </label>
  );
};

export default Checkbox;

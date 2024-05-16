import React from 'react';

/**
 * Interface for the SearchBar component props.
 */
interface ISearchBar {
  placeholder: string; // Placeholder text for the search input
  value: string; // Value of the search input
  changeHandler: React.ChangeEventHandler<HTMLInputElement>; // Event handler for input change event
}

/**
 * SearchBar component renders a search input with a search icon.
 * @param {ISearchBar} props - The props for the SearchBar component.
 * @returns {JSX.Element} The SearchBar component.
 */
const SearchBar: React.FC<ISearchBar> = ({
  placeholder,
  value,
  changeHandler
}: ISearchBar) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        className="block w-full py-2 pl-10 pr-4 leading-normal rounded text-white bg-gray-800 border border-gray-400 focus:border-blue-500 focus:outline-none"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
          className="w-[20px] h-[20px]"
        >
          <title id="title">Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g fill="none" stroke="#848F91">
            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;

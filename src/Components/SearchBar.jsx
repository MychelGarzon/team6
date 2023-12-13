import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="searchBar">
      <label htmlFor="searchInput" className="material-symbols-outlined" aria-hidden="true">
        Search
      </label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleInputChange}
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBar;

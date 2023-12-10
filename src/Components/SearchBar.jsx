import { useState } from 'react';

const SearchBar = ({ onSearch }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
    };


    return (
        <div className="searchBar">
            <span className="material-symbols-outlined">
                search
            </span>
            <input 
            type="text" 
            placeholder='Search products'
            value={searchQuery}
            onChange={handleInputChange}
             />
        </div>
    );
};

export default SearchBar;
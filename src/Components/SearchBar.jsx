const SearchBar = () => {
    return (
        <div className="searchBar">
            <span className="material-symbols-outlined">
                search
            </span>
            <input type="text" placeholder='Search product' />
        </div>
    );
};

export default SearchBar;
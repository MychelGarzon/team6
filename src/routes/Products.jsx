import { useState } from 'react';
import ProductsList from '../Components/ProductsList';
import BackToTop from '../Components/BackToTop';
import SearchBar from '../Components/SearchBar';

function Products() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="cards">
        <ProductsList searchQuery={searchQuery} />
      </div>
      <BackToTop />
    </>
  );
}

export default Products;

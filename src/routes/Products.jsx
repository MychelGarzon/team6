import { useState, useEffect } from 'react';
import ProductsList from '../Components/ProductsList';
import BackToTop from '../Components/BackToTop';
import SearchBar from '../Components/SearchBar';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';


function Products() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

// Page protected by user authentication
const [user, setUser] = useState(null);
  
useEffect(() => {
  // Listen for changes in the user's authentication state
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  // Cleanup the subscription when the component unmounts
  return () => unsubscribe();
}, []);

// If the user is not signed in, you can render alternative content or redirect
if (!user) {
  return <p id='plsSignIn'>Please<Link to={'/'}>&nbsp; sign in &#160;</Link> to view this content.</p>;
}

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
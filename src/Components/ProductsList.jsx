import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import Card from './Card';

function ProductsList({ searchQuery }) {
  // Page title update
  useEffect(() => {
    document.title = `Products | JUDOMYKA`;
  }, []);

  const [products, setProducts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchData = async () => {
      try {
        const productsCollection = collection(firestore, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);

        // Check for specific error scenarios
        if (error.code === 'permission-denied') {
          // Handle permission denied error
          setErrorMessage("Permission denied. Please check your access.");
        } else if (error.code === 'resource-exhausted') {
          // Handle resource exhausted error (e.g., database query quota exceeded)
          setErrorMessage("Database query quota exceeded. Please try again later.");
        } else {
          // Handle other generic errors
          setErrorMessage("An error occurred while fetching products. Please try again.");
        }
      }
    };

    fetchData(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Filter products based on search query
  const filteredProducts = products
    ? products.filter((product) =>
        product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <>
      {filteredProducts ? (
        filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <p>{errorMessage || "Loading..."}</p>
      )}
    </>
  );
}

export default ProductsList;

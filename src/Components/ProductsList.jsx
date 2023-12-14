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

      }
    };

    fetchData(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Filter products based on search query
  const filteredProducts = products
    ? products.filter((product) =>
        product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;


    

  return (
    <>
      {filteredProducts ? (
        filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductsList;
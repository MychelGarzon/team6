import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import Card from './Card';

function ProductsList() {
    //Page title update
    useEffect(() => {
    
      document.title = `Products | JUDOMYKA`;

    }, []);

    const [products, setProducts] = useState([]);
  
    useEffect(() => {


      // Function to fetch data from Firestore
      const fetchData = async () => {
        const productsCollection = collection(firestore, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => doc.data());
        setProducts(productsData);
      };
  
      fetchData(); // Call the function when the component mounts
    }, []); // Empty dependency array ensures the effect runs once after the initial render
  
    return (
      <>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </>
    );
  }
  
  export default ProductsList;
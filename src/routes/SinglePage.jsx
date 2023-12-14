import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';


function SinglePage() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  
    // Fetch product details when productId changes
    useEffect(() => {
        
      const fetchProductDetail = async () => {
        try {
          const docRef = doc(firestore, "products", productId);
          const docSnapshot = await getDoc(docRef);
  
          if (docSnapshot.exists()) {
            setProduct({ id: docSnapshot.id, ...docSnapshot.data() });

          // Update the page title when product details are loaded
          document.title = `${docSnapshot.data().title} | JUDOMYKA`;
          // Page title update ends here.

          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };


  
      fetchProductDetail();
    }, [productId]);

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
      <div className="singlePage_container">
          {product ? (
        <>
          <div className='singlePage_image'>
            <img src={product.img_url} alt={product.title} />
          </div>
  
          <div className='singlePage_info'>
            <h2>{product.title}</h2>
            <p>€{product.price - 0.01} <span>FREE SHIPPING</span></p>
            <h3>Description</h3>
            <p>{product.description}&#160;
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis quia aliquam quaerat a, quibusdam quidem quos illo perferendis rem.
            </p>
            <Link to="/products">&lt; Back to Products</Link>
          </div>
        </>
      ) : (
        <p>No such Product!</p>
      )}  
  
        
      </div >
  
  
    );
  }
  
  export default SinglePage;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
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



  return (
    <div className="singlePage_container">

      <div className='singlePage_image'>
        <img src={TestImage} alt="Hero" />
      </div>
      <div className='singlePage_info'>
        <p>Products</p>
        <h2>Awesome product name</h2>
        <p>56.19 FREE SHIPPING</p>
        <h3>Description</h3>
        <p>Nunc mollis, erat non suscipit blandit, lacus orci ultricies lectus, ut varius nulla diam at nulla. Pellentesque eros risus, consectetur a eros sed, lacinia placerat augue. Etiam porta tincidunt lectus, quis faucibus tellus imperdiet at. Sed augue augue, porttitor a pellentesque quis, maximus ut nisi. Suspendisse posuere lorem ex, fermentum ornare ligula sodales nec. Ut viverra in mauris nec venenatis. Praesent quam leo, eleifend vitae justo ut, pulvinar tincidunt odio.</p>
        <a onClick={() => navigate(-1)}>Back to Catalogue</a>
      </div>


        {product ? (
      <React.Fragment>
        <div className='singlePage_image'>
          <img src={product.img_url} alt={product.title} />
        </div>

        <div className='singlePage_info'>
          <h2>{product.title}</h2>
          <p>€{product.price} <span>FREE SHIPPING</span></p>
          <h3>Description</h3>
          <p>{product.description}&#160;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis quia aliquam quaerat a, quibusdam quidem quos illo perferendis rem.
          </p>
        </div>
      </React.Fragment>
    ) : (
      <p>No such Product!</p>
    )}  

      <Link to="/products">Back to Catalogue</Link>

    </div >

  );
}


export default SinglePage;



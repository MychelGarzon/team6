import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
/* import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProdCarouselLocal.css'; */

import { firestore } from '../firebase';
import { collection, getDocs  } from "firebase/firestore";


const ProductCarousel = () => {
  const [products, setProducts] = useState([]); // Set an empty array as the initial state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const collectionRef = collection(firestore, "products");
        //const q = query(collectionRef, orderBy('title')); // Default sort order by name
        const snapshot = await getDocs(collectionRef);

        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));


        setProducts(productsData);
        /* console.log('Fetched Products:',  productsData ); */
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed
    responsive: [
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
            },
          },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
            },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            },
        },
    ],
  };

  return (
    <>
    <Slider {...settings}>
      {products.map((product) => (
        <Link key={product.id} className='productURL1' to={`/product/${product.id}`}>
        <div className='carouselCard' key={product.id}>
          <img className='carouselImg' src={product.img_url} alt={product.title} />
          <p >
            <span className='priceBar'>€{product.price - 0.01}</span>
            {/* <button className='addBtn'>Add to List</button> */}
          </p>
        </div>
        </Link>
      ))}
    </Slider>
    </>
    
  );
};

export default ProductCarousel;
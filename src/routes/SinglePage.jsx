import { useNavigate } from 'react-router-dom'
import TestImage from '../assets/testImage.jpg'
function SinglePage() {

  const navigate = useNavigate();

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
      </div>

      <a onClick={() => navigate(-1)}>Back to Catalogue</a>
    </div >


  );
}

export default SinglePage;

{/* <div className='singlePageInfo'>
  <h2>{data.name}</h2>
  <img src={`https://source.unsplash.com/600x600/?${urlName},${category}`} alt="picture" />
  <p>Likes: {data.likes}</p>
  <button onClick={() => navigate(-1)}>Return</button>
</div> */}
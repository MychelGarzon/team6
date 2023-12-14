import { Link } from 'react-router-dom';

function Card({ product }) {
  return (
    <Link key={product.id} className='productURL' to={`/product/${product.id}`}>
      <div className="card">
        <div className="card__img">
          <img src={product.img_url} alt={product.title} />
        </div>
        <div className="card__content">
          <h3 className="card__name">{product.title}</h3>
          <p className="card__category">{product.category}</p>
          <p className="card__price">€{product.price - 0.01}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

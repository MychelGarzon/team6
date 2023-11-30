function Card({ product }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={product.imgURL} alt={product.title} />
      </div>
      <div className="card__content">
        <h3 className="card__name">{product.title}</h3>
        <p className="card__category">{product.category}</p>
        <p className="card__price">{product.price}</p>
      </div>
    </div>
  );
}

export default Card;

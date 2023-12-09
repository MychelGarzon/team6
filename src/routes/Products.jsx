import ProductsList from '../Components/ProductsList';
import BackToTop from '../Components/BackToTop';

function Products() {
  return (
    <>
      <div className="cards">
        <ProductsList />
      </div>
      <BackToTop />
    </>
  );
}

export default Products;

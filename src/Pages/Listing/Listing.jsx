import Card from '../../Components/Card/Card';
import products from '../../data';
const Listing = () => {
  return (
    <div className="container">
      <h1>Listing</h1>
      <div className="row">
        <div className="col">Filter section</div>
      </div>
      <div className="row g-2">
        {products.map((product) => {
          return (
            <div className="col" key={product.id}>
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Listing;

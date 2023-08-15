import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../../data";
const ProductDetail = () => {
  const { id } = useParams();
  console.log(products);
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/listing">
            <button type="button" className="btn btn-light">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={product.image}
            alt="product"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            Price : <strong>Rs. {product.price}</strong>
          </p>
          <p>
            Rating : <strong>{product.rating}</strong>
          </p>
          <Link to="/cart" className="btn btn-primary">
            <button type="button" className="btn btn-primary ms-auto">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

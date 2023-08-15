import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description.length > 50
            ? product.description.slice(0, 50) + '...'
            : product.description}
        </p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};
export default Card;

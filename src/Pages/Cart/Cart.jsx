import { Link } from 'react-router-dom';
import CardHorizontal from '../../Components/CardHorizontal/CardHorizontal';
const Cart = () => {
  return (
    <div className="container">
      <h1>Cart</h1>
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
        <div className="col-8">
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
        </div>
        <div className="col-4">
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-header">Cart Summary</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price (3 items) - $250</li>
              <li class="list-group-item">Discount - $50</li>
              <li class="list-group-item">Delivery Charges - $20</li>
            </ul>
            <div class="card-footer">Total - $220</div>
          </div>
          <button type="button" className="btn btn-primary mt-3">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

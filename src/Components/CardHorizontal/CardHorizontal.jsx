const CardHorizontal = () => {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '90%' }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="/img/prodImageTwo.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">$50</p>
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    <div className="col-4">
                      <button type="button" className="btn btn-light">
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <span>1</span>
                    </div>
                    <div className="col-4">
                      <button type="button" className="btn btn-light ">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-danger">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardHorizontal;

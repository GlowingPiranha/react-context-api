import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  }, [id]);

  if (!product) return <p>Caricamento...</p>

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h4 className="fw-bold">${product.price}</h4>
          <p>
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>


          <div className="d-flex gap-2 mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate(`/Products/${parseInt(id) - 1}`)}
              disabled={id <= 1}
            >
              Prev
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate(`/Products/${parseInt(id) + 1}`)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;


import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { maxPrice } = useContext(BudgetContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data);
      console.log(resp.data)
    });
  }, []);

  const filteredProducts =
    maxPrice !== null
      ? products.filter((p) => p.price <= maxPrice)
      : products;

  return (
    <div className="container my-4">
      <div className="row row-cols-5 g-4">
        {filteredProducts.map((p) => (
          <div key={p.id} className="col">
            <Link to={`/products/${p.id}`} className="text-decoration-none text-dark" >
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top p-3"
                  alt={p.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{p.title}</h5>
                  <p className="text-muted small mb-1">{p.category}</p>
                  <p className="fw-bold mb-2">${p.price}</p>
                  <p className="small text-muted mb-2">
                    {p.rating.rate} ({p.rating.count})
                  </p>
                  <button className="btn btn-warning btn-sm mt-auto">Aggiungi al carrello</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Products;


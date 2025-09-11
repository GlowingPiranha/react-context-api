import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Layout() {

  const { maxPrice, setMaxPrice } = useContext(BudgetContext)

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Home
        </NavLink>

        <NavLink to="/about" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Chi siamo
        </NavLink>

        <NavLink to="/products" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Prodotti
        </NavLink>
      </nav>

      <input type="number" placeholder="Prezzo max" value={maxPrice ?? ""} onChange={(e) =>
        setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)
      }
        className="mx-2 my-2"
      />

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Layout() {

  const { budgetMode, setBudgetMode } = useContext(BudgetContext)

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

      <button onClick={() => setBudgetMode(!budgetMode)} className="mx-3 my-2 bg-success p-1">
        {budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}
      </button>


      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
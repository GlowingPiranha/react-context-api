import { Outlet, NavLink } from "react-router-dom";

function Layout() {
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

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Products from "./pages/products.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"


function App() {

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<h1>404 — Pagina non trovata</h1>} />
      </Route>

    </Routes>
  )
}

export default App

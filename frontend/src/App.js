
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="signin.html">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />} ></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>

    </BrowserRouter>
  );
}

export default App;

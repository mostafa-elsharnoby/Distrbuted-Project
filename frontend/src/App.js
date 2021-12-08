
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import { signout } from "./actions/userActions";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  let { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }

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
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo["user"]["firstName"]} <i className="fa fa-caret-down"></i> {' '}</Link>
                  <ul className="dropdown-content">
                    <Link to="#" onClick={signoutHandler}>Sign Out</Link>
                  </ul>
                </div>
              ) : 
              (
                <Link to="/signin">Sign In</Link>
              )
            }
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/" element={<HomeScreen />} ></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>

    </BrowserRouter>
  );
}

export default App;

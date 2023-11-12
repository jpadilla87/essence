import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import { ShopContextProvider } from "./context/shop-context";
import { UserContextProvider } from "./context/user-context";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <UserContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </UserContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;

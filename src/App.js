import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
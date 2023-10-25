import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About/>} />
        <Route path="product/:productId" element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;

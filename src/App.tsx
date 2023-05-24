import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import { Shop } from "./components/Shop";
import { NoPage } from "./components/NoPage";
import { Promo } from "./components/Promo";
import { Search } from "./components/Search";
import { Product } from "./components/Product";
import { useEffect, useState } from "react";

function App() {
  const [basket, setBasket] = useState([{}]);

  function setItemToBasket(productId: string, size: string, quantity: string) {
    const newProduct = { id: productId, size: size, quantity: quantity };

    const toSet = basket.concat(newProduct);
    setBasket(toSet);
  }

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    const getBasket = localStorage.getItem("basket");
    if (getBasket) {
      setBasket(JSON.parse(getBasket));
    }
  }, []);

  return (
    <div className='app bg-background'>
      <Router>
        <div className='sticky z-50 top-0'>
          <Promo />
          <Header />
        </div>
        <Routes>
          <Route path='/shop/men' element={<Shop type='men' />} />
          <Route path='/shop/women' element={<Shop type='women' />} />
          <Route path='/search/*' element={<Search />} />
          <Route
            path='/product/*'
            element={<Product setItemToBasket={setItemToBasket} />}
          />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NoPage />} />
          <Route path='/404' element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

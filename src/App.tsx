import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import { Shop } from './components/Shop';
import { NoPage } from './components/NoPage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/shop" element={<Shop type="all"/>} />
          <Route path="/shop/men" element={<Shop type="men"/>} />
          <Route path="/shop/women" element={<Shop type="women"/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

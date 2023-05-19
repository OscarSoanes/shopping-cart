import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import { Shop } from './components/Shop';
import { NoPage } from './components/NoPage';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

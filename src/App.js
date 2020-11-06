import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';


import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import FabricsPage from './pages/FabricsPage'
import ShopPage from './pages/ShopPage'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/checkout" component={CartPage} />
          <Route path="/fabrics" component={FabricsPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;

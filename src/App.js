import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';


import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import FabricsPage from './pages/FabricsPage'
import ShopPage from './pages/ShopPage'
import Home from './pages/Home';
import Footer from './components/Footer';
import Delivery from './pages/Delivery'
import FAQ from './pages/FAQ'
import Returns from './pages/Returns'
import Press from './pages/Press'
import Blog from './pages/Blog'
import Abbreviation from './pages/Abbreviations'
import AboutFabrics from './pages/AboutFabrics'
import Feedback from './pages/Feedback'
import Terms from './pages/Terms'
import Policy from './pages/Policy'
import FabricSample from './pages/FabricSample'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={AboutPage} />
          <Route path='/checkout' component={CartPage} />
          <Route path='/fabrics' component={FabricsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/blog' component={Blog} />
          <Route path='/delivery' component={Delivery} />
          <Route path='/returns' component={Returns} />
          <Route path='/faq' component={FAQ} />
          <Route path='/press' component={Press} />
          <Route path='/abbreviation' component={Abbreviation} />
          <Route path='/learn' component={AboutFabrics} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/policy' component={Policy} />
          <Route path='/terms' component={Terms} />
          <Route path='/sample' component={FabricSample} />
        </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
// import bespokeData from './data/bespokeData'

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
import ProductView from './pages/ProductView';

//Shop pages
import Bespoke from './pages/shop/Bespoke'
import Brocade from './pages/shop/Brocade'
import Coating from './pages/shop/Coating'
import Cotton from './pages/shop/Cotton'
import Denim from './pages/shop/Denim'
import Goergette from './pages/shop/Goergette'
import HiTech from './pages/shop/HiTech'
import Knit from './pages/shop/Knit'
import Linen from './pages/shop/Linen'
import Lining from './pages/shop/Lining'
import Ppe from './pages/shop/Ppe'
import Shirting from './pages/shop/Shirting'
import Silk from './pages/shop/Silk'
import Trimming from './pages/shop/Trimming'
import Tweed from './pages/shop/Tweed'
import Velvet from './pages/shop/Velvet'

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

          <Route path='/product/:id' exact component={ProductView} />
          <Route path='/bespoke' exact component={Bespoke} />
          <Route path='/brocade' exact component={Brocade} />
          <Route path='/coating' exact component={Coating} />
          <Route path='/cotton' exact component={Cotton} />
          <Route path='/denim' exact component={Denim} />
          <Route path='/goergette' exact component={Goergette} />
          <Route path='/hitech' exact component={HiTech} />
          <Route path='/knit' exact component={Knit} />
          <Route path='/linen' exact component={Linen} />
          <Route path='/lining' exact component={Lining} />
          <Route path='/ppe' exact component={Ppe} />
          <Route path='/shirting' exact component={Shirting} />
          <Route path='/silk' exact component={Silk} />
          <Route path='/trimming' exact component={Trimming} />
          <Route path='/tweed' exact component={Tweed} />
          <Route path='/velvet' exact component={Velvet} />

        </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;

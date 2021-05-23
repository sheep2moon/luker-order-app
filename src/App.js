import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AuthProvider from './contexts/AuthContext';
import AddProduct from './components/AddProduct';
import CartProvider from './contexts/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/add-product' component={AddProduct} />
              <Route exact path='/cart' component={Cart} />
            </Switch>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

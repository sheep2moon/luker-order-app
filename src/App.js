import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AuthProvider from './contexts/AuthContext';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/add-product' component={AddProduct} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

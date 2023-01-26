import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Navbar from './pages/navbar';
import Products from './pages/products';
import Product from './pages/product';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart';



function App() {
  return(
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </>
  );
  
}

export default App;

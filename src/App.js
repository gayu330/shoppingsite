import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Navbar from './pages/navbar';
import Products from './pages/products';
import Product from './pages/product';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart/cart';
import { Provider } from 'react-redux';
import store from './pages/redux/store';
import Profile from './pages/profile/profile';

function App() {
  return(
    <>
      <BrowserRouter>
      <Provider store={store}>
      <Navbar/>
      <Switch>
       
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile" component={Profile}/>
      </Switch>
      </Provider>
      </BrowserRouter>
    </>
  );
  
}

export default App;

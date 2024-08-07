import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProductPage from './components/ProductPage'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/products/:id" component={ProductPage} />
      <Route path="/not-found" component={NotFound} />
      
     
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App

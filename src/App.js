import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './container/Header';
import ProductDetail from './container/ProductDetail';
import productslisting from './container/ProductsListing'
function App() {

  return (
    
    <div className="App">
      <Router>
      <Header/>
        <Switch>
            <Route path='/' exact component={productslisting}/>
            <Route path='/product/:productId' exact component={ProductDetail}/>
            <Route>404 not found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

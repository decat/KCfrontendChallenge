import InventoryContainer from './components/inventory/inventoryContainer'
import UsageContainer from './components/usage/usageContainer'
import ProductsContainer from './components/products/productsContainer'
import ChildrenContainer from './components/children/childrenContainer'
import OverviewContainer from './components/overview/overviewContainer'
import { Route, Redirect, Switch } from "react-router-dom";
import NavbarContainer from './components/navbar/navbarContainer.jsx'

function App() {
  return (
    <div id="main">
    <NavbarContainer />
    <Switch>
      <Route exact path="/home" component={OverviewContainer} />
      <Route exact path="/inventory" component={InventoryContainer} />
      <Route exact path="/usage" component={UsageContainer} />
      <Route exact path="/products" component={ProductsContainer} />
      <Route exact path="/children" component={ChildrenContainer} />
      <Redirect from="/" to="/home" />
        </Switch>
        
      </div>
  );
}

export default App;

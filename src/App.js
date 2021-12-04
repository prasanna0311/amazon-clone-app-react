import AllProduct from "./Pages/AllProduct";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import ProductConfig from "./Config/ProductConfig";
import NavbarComponent from "./Component/NavbarComponent";
import Cardfn from "./Pages/Card";
import ModalFn from "./Component/ModalComponent";
import ProductDetails from "./Component/ProductDetails";
import Login from "./Component/Login";
import OrderComponent from "./Component/OrderComponent";

// Router
export default function App() {
  return (
    <ProductConfig>
      <BrowserRouter>

      <Route exact path={['/', '/login']}>
        <Switch>
        <Route exact path="/" component={Login} />
        </Switch>
      </Route>
     
      
      <Route exact path={['/card', '/modal','/ProductDetails','/orderedproduct','/:name']}>
      <NavbarComponent />
        <Switch>
       
        <Route path="/card" component={Cardfn} />
          <Route path="/modal" component={ModalFn} />
          <Route path="/productdetails" component={ProductDetails} />        
          <Route path="/orderedproduct" component={OrderComponent} />
          <Route path="/:name" component={AllProduct} />
        </Switch>
      </Route>
        {/* <Route exact path="/" render={() => <Redirect to="/allproduct" />} /> */}
 
      </BrowserRouter>
    </ProductConfig>
  )
}
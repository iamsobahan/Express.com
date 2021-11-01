import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Addnewpack from "./Components/Addnewpack/Addnewpack";
import Authprovider from "./Components/Authprovider/AuthProvider";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Manageorders from "./Components/Manageorders/Manageorders";
import Orders from "./Components/Orders/Orders";
import Placeorder from "./Components/Placeorder/Placeorder";
import PrivateRoute from "./Components/Privateroute/Privateroute";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/placeorder/:id">
            <Placeorder></Placeorder>
          </PrivateRoute>

          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/manageorders">
            <Manageorders></Manageorders>
          </Route>

          <Route path="/addnewpack">
            <Addnewpack></Addnewpack>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;

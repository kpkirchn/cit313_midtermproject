import './App.css';
import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Box from "./components/Box";
import Funko from "./components/Funko";


function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path={"/"} component={Wrapper}/>
                  <Route path={"/Wrapper/:id"} component={Funko}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;

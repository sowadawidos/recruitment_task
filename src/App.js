import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./scss/main.scss";
import {Home} from "./components/Home/Home";

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
          </Switch>
        </Router>
      </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { NewRecord } from "./pages/NewRecord";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/add">
          <NewRecord />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

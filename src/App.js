import './App.css';
import Header from "./Header";
import React from "react";
import Slider from "./Slider"
import RecomendedContent from "./RecomendedContent"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";


function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
              <Route exact path="/login">
  <Login />
</Route>
          <Route path="/search">
            <h2>search-page</h2>
          </Route>
          <Route path="/">
            <div className="app_page">

        <Slider />
        <RecomendedContent/>S
    </div>
            <h2>home-page</h2>
          </Route>
        </Switch>
     </Router>
    </div>

  
  );
}

export default App;

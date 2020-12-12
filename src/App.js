import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import SingleJokeContent from "./components/SingleJokeContent";
import JokesContent from "./components/JokesContent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Switch>
        <Route path="/:id" component={SingleJokeContent} />
        <Route path="/" component={JokesContent} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

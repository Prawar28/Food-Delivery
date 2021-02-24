import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchPage from './components/SearchPage'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>

        

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
              {/* header */}
            <Header />
            {/* home */}
            <Home />
            {/* footer */}
            <Footer />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;

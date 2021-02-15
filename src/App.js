import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path='/'> <Home /></Route>
        <Route exact path='/Portfolio'> <Portfolio /></Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

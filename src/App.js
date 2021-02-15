import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Route exact path='/'> <Home /></Route>
        <Route exact path='/Portfolio'> <Portfolio /></Route>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

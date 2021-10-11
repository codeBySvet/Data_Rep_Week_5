import './App.css';
import React, { Component } from 'react'; //importing elements from React 
import { Header } from './components/header'; //importing header.js component
import { Footer } from './components/footer'; //importing footer.js component
import { Content } from './components/content'; //importing content.js component
import 'bootstrap/dist/css/bootstrap.min.css'; // importing boostrap as required for using the nav bar
import { Navbar, Nav } from 'react-bootstrap'; //import required for nav bar elements
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //import required for routing

import { Read } from './components/read'; //importing read.js component
import { Create } from './components/create'; //importing create.js component

//Creating class for nav bar and rooting the components to be rendered on the page
class App extends Component {

  //render method required for describing the view to be rendered to the browser window
  render() {
    return (
      <Router>
        <div className="App">
          {/* Adding navigation bar from bootstrap */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* Creating sections within the navbar for each component */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/read">Movies</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />

          {/* Switch statment to control routing for the navbar */}
          <Switch>
            {/* Linking each href path with the appropriate component */}
            <Route path='/' component={Content} exact />
            <Route path='/header' component={Header}/>
            <Route path='/footer' component={Footer}/>
            <Route path='/read' component={Read}/>
            <Route path='/create' component={Create}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
// Marking for export
export default App;

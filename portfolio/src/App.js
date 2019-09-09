import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/projects/Portfolio';
import Footer from './components/layout/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddProject from './components/projects/AddProject';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Background />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Portfolio' component={Portfolio} />
            <Route path='/Contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/newProject' component={AddProject} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

}


export default App;

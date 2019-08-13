import React, {Component} from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Background />
        </div>
      </BrowserRouter>
    );
  }

}


export default App;

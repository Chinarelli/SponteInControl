import React, { Component } from 'react';
import './app.css';
import Datatable from './components/datatable';
// import Button from './button';
// import Fab from './fab';
import Modal from './components/modal';
import { BrowserRouter as Router} from 'react-router-dom';


class app extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">            
          <img src="logosponte.png" className="App-logo" alt="logo" />        
        </header> 
        <Datatable className="data-table"/>
        <Modal/>        
      </div>
     </Router>
    );
  }
}

export default app;

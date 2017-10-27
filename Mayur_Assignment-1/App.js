import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {App2} from './App2';

class App extends Component {
  render() {
    var personList = [{name:"Mayur", designation:"Engineer", doj: "31/01/2016"}, {name:"Melvin", designation:"Engineer", doj: "31/01/2016"},{name:"Pradeep", designation:"Engineer", doj: "31/01/2016"},{name:"Arun", designation:"Senior Engineer", doj: "1/01/2014"}];

  var persons = personList.map((person, i)=><tr><td>{person.name}</td><td>{person.designation}</td><td>{person.doj}</td></tr>);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is my React First Assignment</h2>
      <h3>List of Employees</h3>
        </div>
        <p className="App-intro">
          <table>
      <tr>
      <th>Name</th>
      <th>Designation</th> 
      <th>Date of Joining</th>
      </tr>
      {persons}
      </table>
        </p>
        <App2/>
      </div>
    );
  }
}

export default App;

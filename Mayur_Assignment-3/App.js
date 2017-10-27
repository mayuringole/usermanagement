import React, { Component } from 'react';
import './App.css';
import Person from './Person';
import {App2} from './App2';

class App extends Component {

constructor(props){
super(props);

this.state = {
  data : [{
    name:"Mayur", 
    designation:"Engineer", 
    doj: "31/01/2016"
  }, 
    {
      name:"Melvin", 
    designation:"Engineer", 
    doj: "31/01/2016"
  },
    {
      name:"Pradeep", 
    designation:"Engineer", 
    doj: "31/01/2016"
  },
    {
      name:"Arun", 
    designation:"Senior Engineer",
     doj: "1/01/2014"
   }],

title : ['Name' , 'Designation', 'DOJ']

}
}

getEmployee(nameText,desigText,dojText){
  
    var newRowData = this.state.data;
    newRowData.push({name: nameText, designation: desigText, doj: dojText});
    this.setState({
      data:newRowData
  });
}

updateEmployee(index,nameText,desigText,dojText){

  var tempData = this.state.data;

  for(var i = 0; i< tempData.length; i++){
    if (i == index){
      tempData[i].name = nameText;
      tempData[i].designation = desigText;
      tempData[i].doj = dojText;
    }
  }

  this.setState({
    data: tempData
  });
}

deleteEmployee(index,nameText,desigText,dojText){

  var tempData = this.state.data;

  for(var i = 0; i< tempData.length; i++){
    if (i == index){
      tempData.splice(index, 1);
  this.setState({data: tempData });
    }
  }
}

  render() {

  var persons = this.state.data.map((person,i) => 
      <Person prsn={person} index={i}
      updateEmployeeInfo = {this.updateEmployee.bind(this)}
      deleteEmployeeInfo = {this.deleteEmployee.bind(this)}
      />)
      

    return (
      <div>
          <h2>This is my React First Assignment</h2>
        <App2 getEmployeeInfo = {this.getEmployee.bind(this)}/>
        
        <h3>List of Employees</h3>
          <table>
            <tr>{persons}</tr>
          </table>             
            
      </div>
    );
  }
}


export default App;

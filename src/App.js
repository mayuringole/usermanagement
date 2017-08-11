import React, { Component } from 'react';
import './App.css';
import Person from './Person';
import {App2} from './App2';
import { Button } from 'react-bootstrap';

import { Table } from 'react-bootstrap';
import { Form, FormGroup, Col, FormControl, ControlLabel, Tabs, Tab} from 'react-bootstrap';

class App extends Component {

    constructor(props){
    super(props);

        this.state = {
            data : [{
                firstName:"Mayur", 
                lastName:"Ingole", 
                state: "Maharashtra",
                city: "Amravati",
                email: "mayur@gmail.com"
            }, 

            {
                firstName:"Rishabh", 
                lastName:"Gupta", 
                state: "Maharashtra",
                city: "Pune",
                email:"rishabh@gmail.com"

            }],
    

            title : ['FirstName' , 'LastName', 'State', 'City', 'Email'],

            isLoginMode: false,

            username: "",

            password: ""

        }
    }

    buttonLogin(){
      
        console.log(this.state.username);
        var uName=(this.state.username);
        var uPass=(this.state.password);
        if(uName == "Mayur" && uPass == "Mayur")
        {
            this.setState({
                isLoginMode : true
            });
        }
        else
        {
            alert("User Name or Password is incorrect.");
            this.refs.name.value="";
            this.refs.passw.value="";
        }
      

    }

    getEmployee(firstText,lastText,stateText,cityText,emailText){
  
        var newRowData = this.state.data;
        newRowData.push({firstName: firstText, lastName: lastText, state: stateText, city: cityText, email:emailText});
        this.setState({
            data:newRowData
        });
    }

    updateEmployee(index,firstText,lastText,stateText,cityText,emailText){

        var tempData = this.state.data;

        for(var i = 0; i< tempData.length; i++){
            if (i == index){
                tempData[i].firstName = firstText;
                tempData[i].lastName = lastText;
                tempData[i].state = stateText;
                tempData[i].city = cityText;
                tempData[i].email = emailText;
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

var heading = this.state.title.map((head)=>
    <th>{head}</th>)

    var loginPage = (
                         <div>                    
                        <h1>Employee Login</h1>

                        <Form horizontal>
                      <FormGroup controlId="formHorizontalEmail" >
                        <Col componentClass={ControlLabel} sm={2}>
                          User Name
                        </Col>
                        <Col sm={3}>
                          <FormControl type="text" placeholder="User Name" onChange={e => this.setState({username: e.target.value})}  />
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                          Password
                        </Col>
                        <Col sm={3}>
                          <FormControl type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} />
                        </Col>
                      </FormGroup>

                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Button type="submit" onClick={this.buttonLogin.bind(this)}>
                            Login
                          </Button>
                        </Col>
                      </FormGroup>
                      </Form>                    
                        </div>

                );
    var mainPage = (
                      <div>
                      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                        <Tab eventKey={1} title="Add User">
                        <App2 getEmployeeInfo = {this.getEmployee.bind(this)}/>
                         <h3>List of Employees</h3>                        
                        <Table striped bordered condensed hover>
                          <thead>
                            <tr>
                          
                              {heading}
                          
                            </tr>
                          </thead>
                          <tbody>
                                    
                          {persons}
                                    
                          </tbody>
                        </Table> 
                    </Tab>
                    <Tab eventKey={2} title="Search & Update"> 
                      <h3>List of Employees</h3>                        
                      <Table striped bordered condensed hover>
                          <thead>
                          <tr>
                          
                          {heading}
                          
                          </tr>
                          </thead>
                          <tbody>
                                    
                          {persons}
                                    
                          </tbody>
                      </Table>   
                      
                    </Tab>
                    
                  </Tabs> 
                  </div>
               );

return (
  this.state.isLoginMode ? mainPage : loginPage
);
}
}


export default App;

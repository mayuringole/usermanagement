import React, { Component } from 'react';


export class App2 extends Component {
  
    buttonClicked() {
        console.log('Button was clicked!');
        console.log(this.refs.nameText.value);
        this.props.getEmployeeInfo(this.refs.nameText.value, this.refs.desigText.value, this.refs.joiningText.value);

    }
render() {
    return (
      <form>
      <h2>Employee Information</h2>    
      <table>
      <tr><td><label>Name :</label></td><td><input id="inputName" type="text" ref="nameText" /></td></tr>
      <tr><td><label>Designation :</label></td><td><input id="inputDesig" ref="desigText" type="text" /></td></tr>
      <tr><td><label>Joining :</label></td><td><input id="inputJoining" ref="joiningText" type="text" /></td></tr>
      <br/>
      <button type="button" onClick={this.buttonClicked.bind(this)}>Submit</button>
      </table>
      </form>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import {App2} from './App2';

class Person extends Component {

	constructor(props){
		super(props);

		this.state={
			isEditMode: false
		}
	}

	EditModeON(){
		this.setState({
			isEditMode : true
		});

	}	

	buttonUpdate(){

		this.props.updateEmployeeInfo(this.props.index,this.refs.textName.value, this.refs.textDesig.value, this.refs.textDOJ.value);
		
		this.setState({
			isEditMode : false
		});

	}
	
	buttonDelete(){
		console.log(this.props.prsn.name);

		this.props.deleteEmployeeInfo(this.props.index,this.props.prsn.name, this.props.prsn.designation, this.props.prsn.doj);

	}
	render(){

		var displayMode = (
		<tr>
				<td><label >{this.props.prsn.name}</label></td>
				<td><label ref="txtName" >{this.props.prsn.designation}</label></td>
    			<td><label ref="txtName" >{this.props.prsn.doj}</label></td>
			    <td>
			      <button type="button" onClick={this.EditModeON.bind(this)}>Edit</button>
			    </td>
			    <td>
			      <button type="button" onClick={this.buttonDelete.bind(this)}>Delete</button>
			    </td>
		</tr>
		);

		var editMode = (
			    <div>
			    <tr>
					<td><input type="text" ref="textName" defaultValue={this.props.prsn.name} /></td>
					<td><input type="text" ref="textDesig" defaultValue={this.props.prsn.designation} /></td>
	    			<td><input type="text" ref="textDOJ"  defaultValue={this.props.prsn.doj} /></td>

				    <td><button type="button" onClick={this.buttonUpdate.bind(this)}>Update</button></td>
				    
				</tr>
				</div>
		);

		return(

			this.state.isEditMode ? editMode : displayMode
	
		);
	}
}

export default Person;

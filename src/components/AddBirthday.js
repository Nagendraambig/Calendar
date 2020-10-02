import React , { Component } from 'react'
import firebase from '../firebase'
import { Form, FormGroup, Label, Input,Col} from 'reactstrap'
class AddBirthday extends Component {
    constructor(){
        super();
        this.state = {
            name : "",
            dob : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleText = this.handleText.bind(this);
    }
    handleText = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleChange = e =>{
        console.log(JSON.stringify(this.state));
        e.preventDefault();
        let obj = firebase.database().ref('Birthday');
        const item = {
            name : this.state.name,
            dob : this.state.dob,
        };
        obj.push(item);
       
        this.setState({
            name : "",
            dob : ""
        })
    }
    render() {
        return(
            <div id="formCard">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label htmlFor="firstname text" md={2}>First Name</Label>
                        <Col md={10}>
                                <Input type="text" onChange={this.handleText} id="name" name="name"
                                value = {this.state.name} placeholder="Name" 
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="Dob date" md={2}>Date of Birth</Label>
                        <Col md={10}>
                        <Input type="date" onChange = {this.handleText} id="dob" name="dob" 
                            value = {this.state.dob} placeholder="Date of Birth" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        {/* <Button onClick = {this.handleChange}>
                            Save
                        </Button>
                        <Button><a href="/calendar">View Calender</a></Button> */}
                        <Col sm={6}>
                            <button onClick = {this.handleChange}>Save</button>
                            <button><a href="/calendar">Calendar</a></button>
                        </Col>
                        {/* <button style={{ "backgroundColor": "yellow" }} id="add" onClick={this.addField}>Add More</button>
                  <button style={{ "backgroundColor": "yellow" }} id="cal" onClick={this.calendar}>Go to calendar</button>
                  <button style={{ "float": "right" }} id="save" onClick={this.saveData}>Save!</button> */}
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
export default AddBirthday
import React, {Component} from 'react'
import image from './birthday.jpg'
import { Redirect } from 'react-router-dom'
// import './Style.css'
class Home extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = () => {
        return <Redirect to = "/AddBirthday"/>
    }
    render() {
        return (
            <div className="homeCard">
                <img id="image" src={image} alt="monkey hoding a cake" />
                <p style={{ "color": "black" }} >Great app to keep a track of the Birthdays of ur gang ;)</p>
                <button><a href="/addBirthday">START</a> </button>
                {/* <button><a role="button" className="btn btn-primary" href="/addBirthday"><i className="fa fa-phone"></i>Start</a></button> */}
            </div>
        )
    }
}

export default Home
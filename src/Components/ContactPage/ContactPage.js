import React, { Component } from "react";
import Header from "../Header/Header";
import "./contactpage.css"

class ContactPage extends Component{
    render(){
        return(<>
            <Header />
            <div className="devTeamPage">
            <div>
                The development and execution of this game was not possible without the brilliance and dedication of these talented individuals.
            </div>
            <div>Project Manager, team lead, Michael</div>
            <div>Design Lead, front end, Jackie</div>
            <div>Logic, back end, Brett</div>
            <div>Sound, front end, Kameron</div>
            <div>Backend, front end, Hannah</div>
            <div>Shout out to teddy for putting up with us, and inspiring us to always strive to do better, be better, reach for the stars.</div>
            <div>will be filling this out more, need much more info.</div>
            </div>
            </>
        )
    }
}

export default ContactPage
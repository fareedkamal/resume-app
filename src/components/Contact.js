import React, { Component } from "react";
import TextBox from "./TextBox";
class Contact extends Component{
    
    constructor(props){
        super(props);
        this.state = this.props.data ? this.props.data : {
            email: 'Email',
            address: 'Address',
            phone: 'Phone Number',
            linkedin: 'linkedin.com/in/your_url'
        };
    }
    
    render(){
      return(
        <div className="contact fsx gm">
            <div className="flx gs">
                <div className="logo mail"></div>
                <TextBox value={this.state.email}/>
            </div>
            <div className="flx gs">
            <div className="logo address"></div>
                <TextBox value={this.state.address}/>
            </div>
            <div className="flx gs">
                <div className="logo phone"></div>
                <TextBox value={this.state.phone}/>
            </div>
            <div className="flx gs">
                <div className="logo linkedin"></div>
                <TextBox value={this.state.linkedin}/>
            </div>
        </div>
      );
    }
};

export default Contact;
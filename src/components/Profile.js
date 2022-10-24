import React, { Component } from "react";
import TextBox from "./TextBox";


class Profile extends Component{
    
    constructor(props){
        super(props);
        this.state = this.props.data ? this.props.data : {
            name : 'Your Name',
            title: 'Your Title',
            description: 'About Yourself'
        };
    }
    
    render(){
      return(
        <div className="general flx gm">
            <div className="pic"></div>
            <div className="flx col general-sec">
                <TextBox value={this.state.name} cls="fl fb"/>
                <TextBox value={this.state.title} cls="fm fc-g"/>
                <TextBox value={this.state.description} cls="fs"/>
            </div>
        </div>
      );
    }
};

export default Profile;
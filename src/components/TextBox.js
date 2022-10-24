import React, { Component } from "react";


class TextBox extends Component{
    render(){
        return(
            <div contentEditable
                 className={(this.props.cls? this.props.cls + ' textbox' : 'textbox' )}>
                {this.props.value}
            </div> 
        );
    }
}

export default TextBox;
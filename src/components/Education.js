import React, { Component } from "react";
import TextBox from "./TextBox";


class EducationSec extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data? this.props.data : {
            degree : 'Degree Title',
            institute : 'Institute Name',
            start : 'Start Date',
            end: 'End Date',
            location: 'Location'
        };
    }

    handleClick=(e)=>{
        let i = Array.prototype.indexOf.call(e.target.parentElement.parentElement.children,
            e.target.parentElement);
        this.props.deleteSec(i-1);
    }

    render(){
        return(
            <div className="wrapper">
                <TextBox value={this.state.degree} cls="fm fb"/>
                <TextBox value={this.state.institute} cls="fm"/>
                <div className="flx fi fsx fc-g education-sec1 ">
                    <div className="flx">
                        <TextBox value={this.state.start}/>-<TextBox value={this.state.end}/>
                    </div>
                    <TextBox value={this.state.location}/>
                </div>
                <button onClick={this.handleClick} className="del-btn">x</button>
            </div>

        );
    }
}

class Education extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data?
            { edu : this.props.data.map( e => <EducationSec deleteSec={this.deleteSec} data={e}/>) } :
            { edu : [<EducationSec deleteSec={this.deleteSec}/>] };
    }

    addSec=()=>{ 
        this.setState({
            edu: [...this.state.edu,<EducationSec deleteSec={this.deleteSec} />]
        });
    };

    deleteSec=(index)=>{
        const e=[...this.state.edu];
        e.splice(index,1);
        this.setState({edu: []},()=>{
            this.setState({edu:e});
        });
    };

    render(){
      return(
        <div className="education flx col gm">
            <p className="fb fm fc-b">EDUCATION</p>
            {this.state.edu}
            <button onClick={this.addSec} className="add-btn">+</button>
        </div>
        
      );
    }
};

export default Education;
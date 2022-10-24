import React, { Component } from "react";
import TextBox from "./TextBox";

class SkillSec extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data? this.props.data:{
            name: 'Name',
            name: 'Name',
            name: 'Name',
            name: 'Name',
            name: 'Name',
        };
    }
    handleClick=(e)=>{
        let i = Array.prototype.indexOf.call(e.target.parentElement.parentElement.children,
            e.target.parentElement);
        this.props.deleteSec(i);
    }
    render(){
        return(
            <div className="wrapper flx gs">
                <TextBox  value={this.state.name} cls="skill"  />
                <button onClick={this.handleClick} className="del-btn">x</button>
            </div>
        );
    }
}

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data?
        { skls : this.props.data.map( e => <SkillSec deleteSec={this.deleteSec} data={e}/>) } :
        { skls : [
                <SkillSec deleteSec={this.deleteSec}/>,
                <SkillSec deleteSec={this.deleteSec}/>,
                <SkillSec deleteSec={this.deleteSec}/>,
                <SkillSec deleteSec={this.deleteSec}/>
                ]
        };
    }
    addSec=()=>{ 
        this.setState({
            skls: [...this.state.skls,<SkillSec deleteSec={this.deleteSec} />]
        });
    };
    deleteSec=(index)=>{
        console.log(index);
        const e=[...this.state.skls];
        e.splice(index,1);
        this.setState({skls: []},()=>{
            this.setState({skls:e});
        });
    };
    render(){
      return(
        <div className="skills flx col gm">
            <p className="fm fb fc-b">{this.props.title}</p>
            <div className="skill-sec fs flx gs">
                {this.state.skls}
            </div>
            <button onClick={this.addSec} className="add-btn">+</button>
        </div>
      );
    }
};

export default Skills;
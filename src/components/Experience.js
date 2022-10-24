import React, { Component} from "react";
import TextBox from "./TextBox";


class ExperienceSec extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data? this.props.data : {
                title : 'Work Title',
                company : 'Company Name',
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
                <TextBox value={this.state.title} cls="fm fb"/>
                <TextBox value={this.state.company} cls="fm"/>
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

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data?
            { exp : this.props.data.map( e => <ExperienceSec deleteSec={this.deleteSec} data={e}/>) } :
            { exp : [<ExperienceSec deleteSec={this.deleteSec}/>] };
    }
    
    
    addSec=()=>{ 
        this.setState({
            exp: [...this.state.exp,<ExperienceSec deleteSec={this.deleteSec} />]
        });
    };

    deleteSec=(index)=>{
        console.log(index);
        const e=[...this.state.exp];
        e.splice(index,1);
        this.setState({exp: []},()=>{
            this.setState({exp:e});
        });
    };

    render(){
      return(
        <div id="exp" className="experience flx col gm">
            <p className="fb fm fc-b">WORK EXPERIENCE</p>
            {this.state.exp}
            <button onClick={this.addSec} className="add-btn">+</button>
        </div>
      );
    }
};

export default Experience;

let dataExp={
    title:'sadasdasd',
    company:'Blulitmus',
    start:'2018',
    end:'2022',
    location:'Lahore, Pakistan'
};
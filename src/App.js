import React, { Component} from "react";
import { Resume , SampleResume } from "./components/Resume";
import './style.css';

class App extends Component{
  
  constructor(){
    super();
    this.state={
      comp:<Resume/>,
      btnText: 'View Sample' 
    };
  }

  handleClick=()=>{
    const t = (this.state.btnText == 'View Sample')? 'Close Sample': 'View Sample';
    let c = (this.state.btnText == 'View Sample')? <SampleResume/> : <Resume/>;
    this.setState({
      btnText: t,
      comp: c
    })
  };

  render(){
    return (
      <div id="app" className="app-container">
        <button className="resumebtn" onClick={this.handleClick} >{this.state.btnText}</button>
        {this.state.comp}
      </div>
    );
  }
}

export default App;
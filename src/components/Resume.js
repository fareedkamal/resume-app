import React, { Component } from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience.js";
import Skills from "./Skills";
import sample from "./sample";

class Resume extends Component{  
  render(){
    return(
      <div className="resume gl">
        <Profile />
        <Contact />
        <div className="resume-sec gm">
          <Experience />
          <Skills  title="SKILLS"/>
          <Skills  title="INTERESTS"/>
          <Education />
        </div>
      </div>
    );
  }
};


class SampleResume extends Component{  
  render(){
    return(
      <div className="resume gl">
        <Profile data={sample.prof}/>
        <Contact data={sample.cntc}/>
        <div className="resume-sec gm">
          <Experience data={sample.exp}/>
          <Skills data={sample.skills} title="SKILLS"/>
          <Skills data={sample.interests} title="INTERESTS"/>
          <Education data={sample.edu}/>
        </div>
      </div>
    );
  }
};

export {Resume,SampleResume};


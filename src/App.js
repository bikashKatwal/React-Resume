import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Education from "./Education";
import UniProjects from "./Projects";
import Skills from "./Skills";

class App extends Component {
  renderExperiences(){
    let resultArray=[];
    resume.experiences.map((item, index)=>{
      resultArray.push(<Experience item ={item} key={index} />);
    });
    return resultArray;
  }

  renderEducation() {
    let resultEducation = [];
    resume.educations.map((item, index) => {
      resultEducation.push(<Education item={item} key={index}/>);
      });
    return resultEducation;
  }

  renderUniProjects() {
      let resultUniProjects = [];
      resume.projects.map((item, index) => {
          resultUniProjects.push(<UniProjects item={item} key={index}/>);
      });
      return resultUniProjects;
  }
  renderSkills(){
      let resultArray=[];
      resume.skills.map((item, index)=>{
          resultArray.push(<Skills item ={item} key={index} />);
      });
      return resultArray;

  }

  render() {
    return (
        <div className="wrapper">
          <div className="sidebar-wrapper">
            <div className="profile-container">
              <img className="profile" src={resume.profileimage} alt="" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">Full Stack Developer</h3>
            </div>

            <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedIn} target="_blank">linkedin.com/in/bikash-katwal</a></li>
                <li className="github"><i className="fa fa-github"></i><a href={resume.github} target="_blank">github.com/bikashKatwal</a></li>              </ul>
            </div>
            <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
              {this.renderEducation()}
            </div>

          </div>

          <div className="main-wrapper">

            <section className="section summary-section">
              <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
              <div className="summary">
                <p>{resume.careerObjective}</p>
              </div>
            </section>

            <section className="section experiences-section">
              <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                {this.renderExperiences()}

            </section>

            <section className="section projects-section">
              <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                {this.renderUniProjects()}
            </section>

            <section className="skills-section section">
              <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
              <div className="skillset">
                  {this.renderSkills()}
              </div>
            </section>

          </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class UniProjects extends Component{
    render(){
        return(
            <div>
                <div className="intro">
                    <p><b>{this.props.item.projectName}</b><br/>{this.props.item.uniName}</p>
                    <span className="project-title"><b>Objective</b></span> - <span className="project-tagline">{this.props.item.objective}</span><br/>
                    <span className="project-title"><b>Tools</b></span>- <span className="project-tagline">{this.props.item.tools}</span><br/>
                    <span className="project-title"><b>Duties</b></span>- <span className="project-tagline">{this.props.item.duties}</span><br/>
                    <span className="project-title"><b>Result</b></span>- <span className="project-tagline">{this.props.item.result}</span>
                </div>
            </div>
        );
    }
}
export default UniProjects;
import React, { Component } from 'react';
import resume from './resume.json';
import JobList from './JobList';

class Experience extends Component{
    renderJobList(){
        let jobItem=[];
        let jobList=[];
        resume.experiences.map((item, index)=>{
            //console.log(item.joblist);
           jobList.push(item.joblist);
        });
        return jobList;
    }

    render(){
        return(
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.item.title}</h3>
                        <div className="time">{this.props.item.period}</div>
                    </div>
                    <div className="company"><a href={this.props.item.company}>{this.props.item.company}</a></div>
                </div>
                <div className="details">
                    <p>{this.props.item.companyDetails}</p>
                    {this.renderJobList()}
                </div>
            </div>
        );
    }
}
export default Experience;
import React, { Component } from 'react';

//stateless component --- here we just diplay the data without any logic
const  JobListItems = (({job}) =>
    <div className='JobListItems'>
        {job}
    </div>);

class Experience extends Component{

    render(){
        //extracting the data passed from its parent component
        //const { item } = this.props;
        //console.log(item);
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

                    <ul>
                        {this.props.item.joblist.map((job, index)=>
                            <li key={index}><JobListItems  job={job} /></li>)}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Experience;
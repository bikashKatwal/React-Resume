import React, { Component } from 'react';

class JobList extends Component{
    render(){

        return(
            <div>
                <ul><li>{this.props.item.joblist}</li></ul>
            </div>
        )
    }
}
export default JobList;
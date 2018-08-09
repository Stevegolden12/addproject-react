import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
  let projectItems;
	if(this.props.projects){
		projectItems = this.props.propjects.map(project => {
			console.log(project);
		});
	}
  render() {
    return (
      <div className="Projects">
			My Projects
			{this.props.test}
      </div>
    );
  }
}

export default Projects;

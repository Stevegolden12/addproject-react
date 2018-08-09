import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
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

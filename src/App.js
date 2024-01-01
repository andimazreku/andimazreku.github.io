// App.js
import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import ProjectList from './components/ProjectList';

import projects from './projects.json'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ProjectGrid projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/project/:id" render={(props) => <ProjectPage project={projects[props.match.params.id]} />} /> */}
          <Route path="/" element={<ProjectList projects={projects} />} />
          <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
          {/* <Route path="/project/:id" element={<ProjectPage projects={projects} />} /> */}
          {/* <Route path="/project/:id" render={(props) => <ProjectPage match={props.match.params.id} />} /> */}
          {/* <Route path="/project/:id" element={<ProjectPage projects = {projects} />} /> */}
          <Route path="/project/:id" element={<ProjectGrid projects={projects} />} />
          
      
        </Routes>
      </div>
    </Router>
  );
};


export default App;

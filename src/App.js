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

// const projects = [
//   { 
//     imageSrc: 'assets/images/001.png', 
//     gifSrc: '/assets/gifs/001.gif', 
//     title: '° ’ ’’N ° ’ ’’E',
//     description: 'We interviewed Alina Khashei and Sultan Ali Bostani to shape a memorial for people on the move related to their experiences and amplified through a faded estranged display on a tent. Dangers, obstacles and occurrences on their paths thorugh the Balkan route are individually exhibited as maps, while anonymised scenes of tight and minimal living conditions loop, from replicated motions to Sultan’s own recordings. The work serves as a tribute to Alina and Sultan.',
//     info: {
//       year: '2023',
//       colab: [{
//         name: 'Alina Khashei',
//         link: ''
//       },
//       {
//         name: 'Sultan Ali Bostani',
//         link: ''
//       },
//       {
//         name: 'Min Seok Oh',
//         link: ''
//       }],
//       type: 'physical installation, film',
//       assignment: 'memorial project',
//       course: 'Felix Kapolka',
//       uni: 'HTW Berlin',
//       exhibition: []
//     },
//     imgs:[
//       'assets/images/0/1.png',
//       'assets/images/0/2.png',
//       'assets/images/0/3.png',
//       'assets/images/0/4.png',
//       'assets/images/0/5.png',
//       'assets/images/0/6.png'
//     ]
//   },
//   { 
//     imageSrc: 'assets/images/002.png', 
//     gifSrc: 'assets/gifs/002.gif', 
//     title: 'SCANOPTICON',
//     description: 'In her seminal book Surveillance Capitalism (the source material) author Shoshana Zuboff describes how Big Tech is endangering basic democratic rights by turning humanity itself into a product. Self-consciousness and censorship increase as individuals strive to maintain a positive digital image. Manipulation extends further through targeted advertising and personalized content, distorting people’s perceptions of their true selves. The inherent power imbalance strips individuals of control over their self-image and identity, leaving them vulnerable and autonomy-deprived. Augmented reality overlays digital information onto the physical world. SCANOPTICON meshes the physical and virtual realm into one.',
//     info: {
//       year: '2023',
//       colab: [{
//         name: 'Emilia Gentis',
//         link: 'http://emiliagentis.com/'
//       }],
//       type: 'AR installation',
//       assignment: '',
//       course: 'Mykala Hyldig Dal',
//       uni: 'HTW Berlin',
//       exhibition: [
//         {
//           name: 'MANIFEST:IO',
//           place: 'Berlin, Germany',
//           time: '17.02.-18.02.2023'
//         },
//         {
//           name: 'ARS Electronica Festival 2023',
//           place: 'Linz, Austria',
//           time: '06.09.-10.09.2023'
//         }
//       ]
//     },
//     imgs:[
//       'assets/images/1/1.png',
//       'assets/images/1/2.png',
//       'assets/images/1/3.png',
//       'assets/images/1/4.png',
//       'assets/images/1/5.png',
//       'assets/images/1/6.png',
//       'assets/images/1/7.png',
//       'assets/images/1/8.png'
//     ]
//   },
//   { 
//     imageSrc: 'assets/images/003.png', 
//     gifSrc: 'assets/gifs/003.gif', 
//     title: 'HABEN ODER SEIN',
//     description: 'The texts written by Erich Fromm in 1976 are still of unrestricted relevance in the year 2022. In fact, we already are feeling the dramatic consequences of our greedy society. In a fast-paced world, where information is mostly conveyed through images and simple visual structures, many have difficulties reading complex books. Therefore, we have selected chapters of the book to provide access in a new form, a magazine. In selecting the content, we have been very careful to preserve the views of the author.',
//     info: {
//       year: '2022',
//       colab: [{
//         name: 'Katharina Häring',
//         link: 'https://www.instagram.com/aniratak.n/'
//       }],
//       type: 'magazine',
//       assignment: 'typography project',
//       course: 'Jürgen Huber',
//       uni: 'HTW Berlin',
//       exhibition: []
//     },
//     imgs:[
//       'assets/images/2/1.png',
//       'assets/images/2/2.png',
//       'assets/images/2/3.png',
//       'assets/images/2/4.png',
//       'assets/images/2/5.png',
//     ]
//   }
//   // Add more projects as needed
// ];


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

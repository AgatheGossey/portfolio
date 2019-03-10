import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimes, faLaptop, faCodeBranch, faPlusSquare, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// COMPONENTS
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

library.add(fab, faEnvelope, faTimes, faLaptop, faCodeBranch, faPlusSquare, faCircle, faLinkedin, faGithub)

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;

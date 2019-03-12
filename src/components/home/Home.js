import React from 'react';

import Presentation from 'components/home/Presentation/Presentation';
import Projects from 'components/home/Projects/Projects';

// STYLE 
import styles from './home.module.css';

// PICTURES
import logo from 'assets/logo.png';

const Home = () => {
  return (
    <div className={ styles.home }>
    
      <Presentation />

      <div className={ styles.logoContainer }> 
        <img src={ logo}  alt="Logo" className={ styles.logo }/>
      </div>
      
      <Projects />
    </div>
  )
}

export default Home;

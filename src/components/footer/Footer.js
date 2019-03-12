import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// STYLE 
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={ styles.footer }>

     
      <div className={ styles.text }>Copyright © 2019 Agathe Gossey.<br></br>
Tous droits réservés.</div>
      <div className={ styles.socialMedia }>
        <a href='https://github.com/AgatheGossey' className={ styles.link }>
            <FontAwesomeIcon className={ styles.icon } id={ styles.github } icon={['fab', 'github']} />
        </a>
        <a href='https://www.linkedin.com/in/agathe-gossey-86a45b17b/' className={ styles.link }>
            <FontAwesomeIcon className={ styles.icon } id={ styles.linkedin } icon={['fab', 'linkedin']} />
        </a>
        <a href='mailto:agathe.gossey@gmail.com' className={ styles.link }>
            <FontAwesomeIcon className={ styles.icon } id={ styles.mail } icon='envelope' />
        </a>
      </div>

    </footer>
  )
}

export default Footer;
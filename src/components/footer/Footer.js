import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// STYLE 
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={ styles.footer }>

     
      <div className={ styles.text }>Agathe Gossey - 2019</div>
      <div className={ styles.socialMedia }>
        <FontAwesomeIcon className={ styles.icon } id={ styles.github } icon={['fab', 'github']} />
        <FontAwesomeIcon className={ styles.icon } id={ styles.linkedin } icon={['fab', 'linkedin']} />
        <FontAwesomeIcon className={ styles.icon } id={ styles.mail } icon='envelope' />
      </div>

    </footer>
  )
}

export default Footer;
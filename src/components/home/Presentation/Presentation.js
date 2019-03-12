import TextyAnim from 'rc-texty';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// STYLE 
import styles from './presentation.module.css';

import presentation from 'assets/presentation.png';

const text = 'Développeuse Front-End';

function Presentation() {
    return (
        <div className={ styles.containerLeft }>

            <TextyAnim
                type="mask-top"
                duration={(e) => {
                if (e.index === 2) {
                    return 500;
                }
                return 1000;
                }}
                interval={(e) => {
                if (e.index === 2) {
                    return 500;
                }
                return e.index * 70;
                }}
                onEnd={(type) => {
                }}
                className= { styles.text }
            >
                {text}
            </TextyAnim>
            <div className={ styles.container }>
                <img src={ presentation } alt="présentation" className={ styles.picture }/>
            </div>

            <div className={ styles.icons }>
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
         </div>
    );
  }

export default Presentation;
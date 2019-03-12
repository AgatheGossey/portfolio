import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardDeck, Card, Button } from 'react-bootstrap';

import styles from './skills.module.css';

import cv from './cv.pdf';

const Skills = () => {
  return (
    <div className={ styles.container }>

      <h2 className={ styles.title }>Compétences</h2>
      <CardDeck className={styles.cardDeck}>

        <Card className={ styles.card }>
        <FontAwesomeIcon 
            className={ styles.circle }
            icon="circle"
            id={ styles.laptopCircle }
          />
          <FontAwesomeIcon 
            className={ styles.icon }
            icon="laptop"
            id={ styles.laptopIcon }
          />
          <Card.Body
            className={ styles.cardBody }
          >
            <Card.Title className={ styles.titleCard } text="primary">Front-End</Card.Title>
            <Card.Text>
              ✓ Maitrise du langage de programmation <span className={ styles.langage }>JavaScript</span> ainsi que de ces librairies : <span className={ styles.langage }>ReactJS</span> & <span className={ styles.langage }>React-Redux</span>. <br></br>
              ✓ Utilisation du langage <span className={ styles.langage }>HTML</span>, <span className={ styles.langage }>JSX</span> et <span className={ styles.langage }>CSS</span>.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={ styles.card }>
          <FontAwesomeIcon 
            className={ styles.circle }
            id={ styles.codeBranchCircle }
            icon="circle"
          />
          <FontAwesomeIcon
            className={ styles.icon }
            id={ styles.codeBranchIcon }
            icon="code-branch"
          />
          <Card.Body
            className={ styles.cardBody }
          >
            <Card.Title className={ styles.titleCard }>Back-End</Card.Title>
            <Card.Text>
            ✓ Maniement du langage de programmation <span className={ styles.langage }>PHP</span> et <span className={ styles.langage }>SQL</span>. <br></br>
            ✓ Implémentation du micro-framework <span className={ styles.langage }>SLIM</span>. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={ styles.card }>
          <FontAwesomeIcon 
            className={ styles.circle }
            id={ styles.plusSquareCircle }
            icon="circle"
          />
          <FontAwesomeIcon
            className={ styles.icon }
            id={ styles.plusSquareIcon }
            icon="plus-square"
          />
          <Card.Body
            className={ styles.cardBody }
          >
            <Card.Title className={ styles.titleCard }>Général</Card.Title>
            <Card.Text>
              ✓ Usage de <span className={ styles.langage }>Git/GitHub, Windows, Linux, XAMPP, PhpMyAdmin, FileZilla, Visual Studio Code</span>. 
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      <div className={ styles.cvContainer}>
        <Button variant="info" className={ styles.cv }>
          <a className={ styles.textButton } href={ cv } download="CV Agathe Gossey">
            Télécharger mon CV
          </a>
        </Button>
      </div>

    </div>
    )
}

export default Skills;
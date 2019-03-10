import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardDeck, Card } from 'react-bootstrap';

import styles from './skills.module.css';

const Skills = () => {
  return (
    <div className={ styles.container }>

      <h2 className={ styles.title }>Compétences</h2>
      <CardDeck className={styles.cardDeck}>

        <Card className={ styles.card }>
        <FontAwesomeIcon 
            className={ styles.circle }
            icon="circle"
            id={ styles.laptop }
          />
          <FontAwesomeIcon 
            className={ styles.icon }
            icon="laptop"
          />
          <Card.Body
            className={ styles.cardBody }
          >
            <Card.Title text="primary">Font-End</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={ styles.card }>
          <FontAwesomeIcon 
            className={ styles.circle }
            id={ styles.codeBranch }
            icon="circle"
          />
          <FontAwesomeIcon
            className={ styles.icon }
            icon="code-branch"
          />
          <Card.Body
            className={ styles.cardBody }
          >
            <Card.Title>Back-End</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={ styles.card }>
          <FontAwesomeIcon 
            className={ styles.circle }
            id={ styles.plusSquare }
            icon="circle"
          />
          <FontAwesomeIcon
            className={ styles.icon }
            icon="plus-square"
          />
          <Card.Body
            className={ styles.cardBody }
          >
            <Card.Title>Général</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    )
}

export default Skills;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// STYLE 
import styles from './projectdetails.module.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

const ProjectDetails = ({ project, closeProjectDetails }) => {
    return (
        <div className={ styles.container }>
        
        <div className={ styles.containerDetails }>
            <FontAwesomeIcon 
                id={ styles.close }
                icon='times'
                onClick={() => closeProjectDetails()}
                />
            <h1 className={ styles.title }>
                { project.title }
            </h1>
            <div className= { styles.projectOCR }>
                { project.projectOCR }
            </div>
            <div className={ styles.details }>
                <span className={ styles.span }>Détails :</span>
                { project.details }
            </div>
            <div className={ styles.functionality }>
                <span className={ styles.span }>Fonctionnalités :</span>
                { project.functionality.map(functionality => <div className={ styles.functionalityList }>✓ { functionality }</div>)}
            </div>
            <div className={ styles.technologies }>
                <span className={ styles.span }>Technologies :</span> 
                { project.technologies }
            </div>
            <ButtonToolbar>
                <Button 
                    variant="outline-success"
                    className={ styles.button }
                >
                <a href={ project.link } className={ styles.projectLink }>Voir le site</a>
                </Button>
            </ButtonToolbar>
            </div>
            </div>

    )
}

export default ProjectDetails;
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProjectDetails from './ProjectDetails';

// STYLE 
import styles from './projects.module.css';

import projet0 from 'assets/projet0.png';
import projet1 from 'assets/projet1.png';
import projet2 from 'assets/projet2.png';
import projet3 from 'assets/projet3.png';
import projet4 from 'assets/projet4.png';
import projet5 from 'assets/projet5.png';

const Projects = () => {
    const [projectDetails, toggleProjectDetails] = useState(null);

    const projects = [
        {
            id: 5,
            title: 'My manager',
            projectOCR: 'Projet 5 - Formation Developpeur Web Junior @OpenClassRooms',
            details: 'Création d\'une plateforme fournissant des outils de gestion pour une association.',
            functionality: [
                'Insérer des opérations budgétaire dans un tableau disposant de plusieurs filtres (date, catégorie, nom...).',
                'Calcul automatique du solde total disponible.',
                'Création d\'un thème sombre. Gestion des utilisateurs (approuver, supprimer) par l\'administrateur du site.',
            ],
            technologies: 'ReactJS / Redux / Material-Ui / SLIM / PHP / Javascript natif / JSX / CSS',
            link: 'https://projet5.agathegossey.fr',
            img: projet5,
        },
        {
            id: 4,
            title: 'Blog d\'un écrivain',
            projectOCR: 'Projet 4 - Formation Developpeur Web Junior @OpenClassRooms',
            details: 'Création d\'une application de blog simple dédiée à la publication par épisode du roman de Jean-Forteroche intitulé "Billet simple pour l\'Alaska".',
            functionality: [
                'Interface Front-End : lecture des billets et ajout d\'espace dédié aux commentaires',
                'Interface Back-End : création d\'une interface administrateur, gestion des billets, modération des commentaires',
                'Création d\'un CRUD',
                'Utilisation d\'une architecture MVC',
                'Développement orienté objet',
            ],
            technologies: 'PHP / MySQL / Bootstrap / HTML / CSS',
            link: 'https://projet4.agathegossey.fr',
            img: projet4,
        },
        {
            id: 3,
            title: 'Location de vélo',
            projectOCR: 'Projet 3 - Formation Developpeur Web Junior @OpenClassRooms',
            details: 'Réalisation d\'une page de type "Single Page Application" simulant la réservation de vélos dans la ville de Lyon.',
            functionality: [
                'Création d\'un diaporama', 
                'Affichage d\'une carte affichant en temps réel la liste des stations de location de vélos disponibles à Lyon ainsi que leur disponibilité.',
                'Possibilité de simuler la réservation d\'un vélo',
                'Requêtes HTTP en langage Javascript',
                'Utilisation de l\'API "Canvas"',
                'Stockage des données dans le navigateur à l\'aide de l\'API "Web Storage"',
                'Code concu en Programmation Orientée Objet'

            ],
            technologies: 'Javascript natif / HTML /CSS',
            link: 'https://projet3.agathegossey.fr',
            img: projet3,
        },
        {
            id: 2,
            title: 'Office de tourisme - Strasbourg',
            projectOCR: 'Projet 2 - Formation Developpeur Web Junior @OpenClassRooms',
            details: 'Réalisation du site fictif de l\'office de tourisme de la ville de Strasbourg.',
            functionality: [
                'Réalisation d\'une page d\'accueil graphique', 
                'Mise en place d\'un système de création d\'articles afin d\'afficher les actualités de la ville',
                'Liste des activités culturelles et sportives',
                'Tableau listant des activités du mois avec la possibilité d\'effectuer des inscriptions',
                'Création d\'un formulaire de contact',
            ],
            technologies: 'Wordpress / CSS',
            link: 'https://projet2.agathegossey.fr',
            img: projet2,
        },
        {
            id: 1,
            title: 'Agence Web',
            projectOCR: 'Projet 1 - Formation Developpeur Web Junior @OpenClassRooms',
            details: 'Intégrer la maquette du site d\'une agence web',
            functionality: [
                'Affichage d\'un diaporama à défillement autonomatique',
                'Liste des services proposés par l\'agence',
                'Grille des projets réalisés',
                'Implémentation d\'une carte permettant la localisation de l\'agence',
                'Création d\'un formulaire de contact',
            ],
            technologies: 'HTML, CSS',
            link: 'https://projet1.agathegossey.fr',
            img: projet1,
        },
    ]

    return (
        <div className={ styles.containerRight }>
            { projectDetails ? 
                <ProjectDetails project={projectDetails} closeProjectDetails={ () => toggleProjectDetails(null)}/> :
                <Container className={ styles.container }>
                    <Row className={ styles.row }>
                        {projects.map(project => (
                            <Col key={project.id} className={ styles.col } xs={12} sm={6} onClick={ () => toggleProjectDetails(project)}> 
                                <img src={ project.img } alt="Projet" className={ styles.img }/>
                            </Col>
                        ))}
                        <Col className={ `${styles.col} ${styles.img0}` } xs={12} sm={6}>
                            <img src={ projet0 } alt="Projet" className={ styles.imgDisabled } />
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    )
}

export default Projects;
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import imgTomocho from "../assets/img/Tomocho.png";
import imgTracesOfThePast from "../assets/img/TracesOfThePast.png";
import imgOtakuest from "../assets/img/OtaKuest.png";
import imgRollingGuy from "../assets/img/Portada.PNG";
import imgLaQueseria from "../assets/img/LaQueseria.png";
import imgDitroWorld from "../assets/img/DitroWorld.png";
import imgNoEsDoom from "../assets/img/NoEsDoom.png";
import imgServicePaws from "../assets/img/ServicePaws.png";
import imgReactPortfolio from "../assets/img/React_Portfolio.png";
import imgMinimalistPortfolio from "../assets/img/MinimalistPortfolio.png";

import { ProjectCard } from "./ProjectCard";
import { InDevelopmentCard } from ".//InDevelopmentCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () =>{
    
    const projects = [
        {
            title: "TOM-8-O",
            description: "Juego de tipeo en 2.5D, semifinalista de la GameJamPlus 2023-2024.",
            imgUrl: imgTomocho,
            pageUrl: "https://heinzdbv.itch.io/tom8-o",
            engine: "UNITY",
        },
        {
            title: "TRACES OF THE PAST",
            description: "Juego de experiencia sensorial. Desarrollado durante la Quantum GameJam 2023.",
            imgUrl: imgTracesOfThePast,
            pageUrl: "https://nathkalantar.itch.io/traces-of-the-past",
            engine: "UNITY",
        },
        {
            title: "OTAKUEST",
            description: "Juego de cartas 2D casual en primera persona, con elementos de novela visual.",
            imgUrl: imgOtakuest,
            pageUrl: "https://edyssonrbt.itch.io/otakuest",
            engine: "UNITY",
        },
        {
            title: "ROLLING GUY",
            description: "Juego de plataformas en 2D enfocado en la velocidad y precisión del jugador.",
            imgUrl: imgRollingGuy,
            pageUrl: "https://larraondo.itch.io/rolling-guy",
            engine: "UNITY",
        },
        {
            title: "LA QUESERÍA",
            description: "Juego casual en 2D, donde debes prestar atención a los gustos de tus clientes.",
            imgUrl: imgLaQueseria,
            pageUrl: "https://nathkalantar.itch.io/la-queseria",
            engine: "UNITY",
        },
        {
            title: "DITRO WORLD",
            description:  "Juego serio que mezcla el 2D con elementos 3D para la enseñanza de la física.",
            imgUrl: imgDitroWorld,
            pageUrl: "https://larraondo.itch.io/ditroworld",
            engine: "UNITY",
        },
        {
            title: "NO ES DOOM",
            description:  "Un juego Shooter del tipo Survival Zombie, donde deberás resistir oleadas de enemigos.",
            imgUrl: imgNoEsDoom,
            pageUrl: "https://larraondo.itch.io/noesdoomreescalado",
            engine: "UNITY",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const webProjects = [
        {
            title: "Portafolio de proyectos",
            description: "Un portafolio profesional para exhibir proyectos.",
            imgUrl: imgReactPortfolio,
            pageUrl: "",
            engine: "React",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const inDevelopmentProjects = [
        {
            title: "SERVICE PAWS",
            description: "Juego casual que explora la importancia del apoyo emocional a través de una chica y su perro.",
            imgUrl: imgServicePaws,
            engine: "UNITY",
        },
        {
            title: "Portafolio profesional simple",
            description: "Un portafolio profesional minimalista.",
            imgUrl: imgMinimalistPortfolio,
            engine: "HTML, CSS & Javascript",
        },
    ];
    
    //********************************************************************************************* */

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Mis Proyectos</h2>
                        <p>Aquí encontrarás información actualizada sobre mis trabajos en curso, y los ya publicados.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Video juegos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Páginas Web</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">En desarrollo</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        webProjects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        inDevelopmentProjects.map((project, index) => {
                                            return(
                                                <InDevelopmentCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
}
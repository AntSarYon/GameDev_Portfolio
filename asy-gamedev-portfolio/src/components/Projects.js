import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import imgTomocho from "../assets/img/Tomocho.png";
import imgTracesOfThePast from "../assets/img/TracesOfThePast.png";
import imgOtakuest from "../assets/img/OtaKuest.png";
import imgRollingGuy from "../assets/img/Portada.PNG";
import imgLaQueseria from "../assets/img/LaQueseria.png";
import imgDitroWorld from "../assets/img/DitroWorld.png";
import imgNoEsDoom from "../assets/img/NoEsDoom.png";
import imgServicePaws from "../assets/img/ServicePaws.jpg";
import imgReactPortfolio from "../assets/img/React_Portfolio.png";
import imgMinimalistPortfolio from "../assets/img/MinimalistPortfolio.png";

import { ProjectCard } from "./ProjectCard";
import { InDevelopmentCard } from ".//InDevelopmentCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () =>{
    
    const projects = [
        {
            title: "TOM-8-O",
            description: "A 2.5D typing game. GameJamPlus 2023-2024 Latin American finalist.",
            imgUrl: imgTomocho,
            pageUrl: "https://heinzdbv.itch.io/tom8-o",
            engine: "UNITY",
        },
        {
            title: "TRACES OF THE PAST",
            description: "Sensory experience game. Developed during Quantum GameJam 2023.",
            imgUrl: imgTracesOfThePast,
            pageUrl: "https://nathkalantar.itch.io/traces-of-the-past",
            engine: "UNITY",
        },
        {
            title: "OTAKUEST",
            description: "Casual 2D first-person card game with visual novel elements.",
            imgUrl: imgOtakuest,
            pageUrl: "https://edyssonrbt.itch.io/otakuest",
            engine: "UNITY",
        },
        {
            title: "DITRO WORLD",
            description:  "Serious game that mixes a 2D rpg with 3D elements for teaching physics.",
            imgUrl: imgDitroWorld,
            pageUrl: "https://larraondo.itch.io/ditroworld",
            engine: "UNITY",
        },
        {
            title: "ROLLING GUY",
            description: "2D platform game focused on the player's speed and precision.",
            imgUrl: imgRollingGuy,
            pageUrl: "https://larraondo.itch.io/rolling-guy",
            engine: "UNITY",
        },
        {
            title: "LA QUESERÍA",
            description: "2D casual game, where you must pay attention to the tastes of your customers.",
            imgUrl: imgLaQueseria,
            pageUrl: "https://nathkalantar.itch.io/la-queseria",
            engine: "UNITY",
        },
        {
            title: "IT´S NOT DOOM",
            description:  "A Shooter game of the Zombie Survival type, where you will have to resist waves of enemies.",
            imgUrl: imgNoEsDoom,
            pageUrl: "https://larraondo.itch.io/noesdoomreescalado",
            engine: "UNITY",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const webProjects = [
        {
            title: "Project portfolio",
            description: "A professional portfolio to showcase projects.",
            imgUrl: imgReactPortfolio,
            pageUrl: "",
            engine: "React",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const inDevelopmentProjects = [
        {
            title: "SERVICE PAWS",
            description: "Casual game that explores the importance of emotional support through a girl and her dog.",
            imgUrl: imgServicePaws,
            engine: "UNITY",
        },
        {
            title: "Simple professional portfolio",
            description: "A minimalist professional portfolio.",
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
                        <h2>My projects</h2>
                        <p>Here you will find updated information about my works in progress, and those already published. <br/>
                            Take in count that some of them were programmed with spanish as default language.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Video games</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Web Sites</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Work in progres</Nav.Link>
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
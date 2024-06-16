import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import imgTomocho from "../assets/img/Tomocho.png";
import imgTracesOfThePast from "../assets/img/TracesOfThePast.png";
import imgOtakuest from "../assets/img/OtaKuest.png";
import imgRollingGuy from "../assets/img/Portada.PNG";
import imgLaQueseria from "../assets/img/LaQueseria.png";
import imgDitroWorld from "../assets/img/DitroWorld.png";
import imgNoEsDoom from "../assets/img/NoEsDoom.png";
import imgServicePaws from "../assets/img/ServicePaws.png";
import { ArrowDownCircle } from "react-bootstrap-icons";
import imgTheSanctuary from "../assets/img/TheSanctuary.png";
import imgElCharco from "../assets/img/ElCharco.png";
import imgTheGuide from "../assets/img/TheGuide.png";

import { ProjectCard } from "./ProjectCard";
import { InDevelopmentCard } from ".//InDevelopmentCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import MyPortfolio from "../assets/cv/Portfolio_AntonioSarmientoYon.pdf"


export const Projects = () =>{
    
    const unityProjects = [
        {
            title: "TOM-8-O",
            description: "2.5D rhythm and typing game. Help the cute robot to get his new plant safely to his factory before time runs out. Semifinalist of the GameJamPlus 2023-2024.",
            imgUrl: imgTomocho,
            pageUrl: "https://heinzdbv.itch.io/tom8-o",
            engine: "UNITY",
        },
        {
            title: "TRACES OF THE PAST",
            description: "Sensory experience game. Recover your most precious memories as you explore a mind darkened by Alzheimer's. Developed during Quantum GameJam 2023.",
            imgUrl: imgTracesOfThePast,
            pageUrl: "https://nathkalantar.itch.io/traces-of-the-past",
            engine: "UNITY",
        },
        {
            title: "OTAKUEST",
            description: "Casual 2D first-person card game with visual novel elements. Play an Otaku as he tries to socialize using a questionable deck of cards.",
            imgUrl: imgOtakuest,
            pageUrl: "https://edyssonrbt.itch.io/otakuest",
            engine: "UNITY",
        },
        {
            title: "DITRO WORLD",
            description:  "Serious game that mixes 2D rpg style with 3D elements for teaching physics. Control Ditro, an advanced robot created with the mission to grow in wisdom.",
            imgUrl: imgDitroWorld,
            pageUrl: "https://larraondo.itch.io/ditroworld",
            engine: "UNITY",
        },
        {
            title: "ROLLING GUY",
            description: "Pixelart 2D platformer focused on player speed and precision. Make your way to your final destination as fast as you can while clearing the area of monsters.",
            imgUrl: imgRollingGuy,
            pageUrl: "https://larraondo.itch.io/rolling-guy",
            engine: "UNITY",
        },
        {
            title: "SERVICE PAWS",
            description: "Juego casual en pixelart 2D que explora la importancia del apoyo emocional a través de Emma, una chica con síntomas de depresión, y Nugget, su perro.",
            imgUrl: imgServicePaws,
            pageUrl: "https://larraondo.itch.io/service-paws",
            engine: "UNITY",
        },
        {
            title: "LA QUESERÍA",
            description: "A 2D casual game. Pay attention to the dialogues and help a little mouse with social anxiety to find the ideal cheese for his customers.",
            imgUrl: imgLaQueseria,
            pageUrl: "https://nathkalantar.itch.io/la-queseria",
            engine: "UNITY",
        },
        {
            title: "IT´S NOT DOOM",
            description:  "A Shooter game of the Survival Zombie type, where you will have to resist waves of enemies to prevent them from... dance?",
            imgUrl: imgNoEsDoom,
            pageUrl: "https://larraondo.itch.io/noesdoomreescalado",
            engine: "UNITY",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const unrealProjects = [
        {
            title: "THE SANCTUARY",
            description: "A responsive professional portfolio to showcase projects and skills.",
            imgUrl: imgTheSanctuary,
            pageUrl: "",
            engine: "UNREAL",
        },
        {
            title: "THE GUIDE",
            description: "A minimalist professional portfolio, for those looking for an alternative to the traditional resume format.",
            imgUrl: imgTheGuide,
            engine: "UNREAL",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const inDevelopmentProjects = [
        {
            title: "HORROR GAME",
            description: "A minimalist professional portfolio, for those looking for an alternative to the traditional resume format.",
            imgUrl: imgTheGuide,
            engine: "UNREAL",
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
                                <Nav.Link eventKey="first">UNITY</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">UNREAL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">In progress</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        unityProjects.map((project, index) => {
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
                                        unrealProjects.map((project, index) => {
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
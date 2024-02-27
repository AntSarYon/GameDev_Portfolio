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
            description: "Si lees esto, eres muy guap@. Te invito un helado. rewrfewf fewewfwefew",
            imgUrl: imgTomocho,
            pageUrl: "https://heinzdbv.itch.io/tom8-o",
            engine: "UNITY",
        },
        {
            title: "TRACES OF THE PAST",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgTracesOfThePast,
            pageUrl: "https://nathkalantar.itch.io/traces-of-the-past",
            engine: "UNITY",
        },
        {
            title: "OTAKUEST",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgOtakuest,
            pageUrl: "https://edyssonrbt.itch.io/otakuest",
            engine: "UNITY",
        },
        {
            title: "ROLLING GUY",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgRollingGuy,
            pageUrl: "https://larraondo.itch.io/rolling-guy",
            engine: "UNITY",
        },
        {
            title: "LA QUESERÍA",
            description:  "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgLaQueseria,
            pageUrl: "https://nathkalantar.itch.io/la-queseria",
            engine: "UNITY",
        },
        {
            title: "DITRO WORLD",
            description:  "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgDitroWorld,
            pageUrl: "https://larraondo.itch.io/ditroworld",
            engine: "UNITY",
        },
        {
            title: "NO ES DOOM",
            description:  "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgNoEsDoom,
            pageUrl: "https://larraondo.itch.io/noesdoomreescalado",
            engine: "UNITY",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const webProjects = [
        {
            title: "React Portfolio",
            description: "Si lees esto, eres muy guap@. Te invito un helado. rewrfewf fewewfwefew",
            imgUrl: imgReactPortfolio,
            pageUrl: "",
            engine: "React",
        },
        {
            title: "Minimalist Portfolio",
            description: "Si lees esto, eres muy guap@. Te invito un helado. rewrfewf fewewfwefew",
            imgUrl: imgMinimalistPortfolio,
            pageUrl: "",
            engine: "HTML, CSS & Javascript",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const inDevelopmentProjects = [
        {
            title: "SERVICE PAWS",
            description: "Si lees esto, eres muy guap@. Te invito un helado. rewrfewf fewewfwefew",
            imgUrl: imgServicePaws,
            pageUrl: "https://heinzdbv.itch.io/tom8-o",
            engine: "UNITY",
        },
    ];
    
    //********************************************************************************************* */

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Mis Proyectos</h2>
                        <p>Aquí encontrarás información sobre mis proyectos ya publicados, así como aquellos en los que estoy trabajando actualmente.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Videojuegos</Nav.Link>
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
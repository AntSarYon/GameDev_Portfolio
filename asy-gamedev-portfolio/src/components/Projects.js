import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import imgTomocho from "../assets/img/Tomocho.png";
import imgTracesOfThePast from "../assets/img/TracesOfThePast.png";
import imgOtakuest from "../assets/img/OtaKuest.png";
import imgRollingGuy from "../assets/img/Portada.PNG";
import imgLaQueseria from "../assets/img/LaQueseria.png";
import imgDitroWorld from "../assets/img/DitroWorld.png";

import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () =>{
    
    const projects = [
        {
            title: "TOM-8-O",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgTomocho,
        },
        {
            title: "TRACES OF THE PAST",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgTracesOfThePast,
        },
        {
            title: "OTAKUEST",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgOtakuest,
        },
        {
            title: "ROLLING GUY",
            description: "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgRollingGuy,
        },
        {
            title: "LA QUESERÍA",
            description:  "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgLaQueseria,
        },
        {
            title: "DITRO WORLD",
            description:  "Si lees esto, eres muy guap@. Te invito un helado.",
            imgUrl: imgDitroWorld,
        },
    ];
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Mis Proyectos</h2>
                        <p>Lorem Ipsum dsan asjunak jcdn dajsdba sdjan sduanq dain fwefcyrn hyrb iksfyx </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Videojuegos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Páginas Web</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Otros</Nav.Link>
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
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
}
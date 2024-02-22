import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import meter3 from "../assets/img/meter3.svg";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () =>{
    
    const projects = [
        {
            title: "TitleGame",
            description: "...DEDEWD",
            imgUrl: projImg1,
        },
        {
            title: "TitleGame",
            description: "...DEDEWD",
            imgUrl: projImg2,
        },
        {
            title: "TitleGame",
            description: "...DEDEWD",
            imgUrl: projImg3,
        },
        {
            title: "TitleGame",
            description: "...DEDEWD",
            imgUrl: projImg1,
        },
        {
            title: "TitleGame",
            description: "...DEDEWD",
            imgUrl: projImg2,
        },
        {
            title: "TitleGame",
            description: "...DEDEWD",
            imgUrl: projImg3,
        },
    ];
    
    return(
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Mis Proyectos</h2>
                        <p>Lorem Ipsum dsan asjunak jcdn dajsdba sdjan sduanq dain fwefcyrn hyrb iksfyx </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
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
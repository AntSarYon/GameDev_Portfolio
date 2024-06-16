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
import MyPortfolio from "../assets/cv/Portafolio_AntonioSarmientoYon.pdf"

export const Projects = () =>{
    
    const unityProjects = [
        {
            title: "TOM-8-O",
            description: "Juego de tipeo y ritmo en 2.5D. Ayuda al tierno robot a llevar su nueva planta sana y salva hasta su fábrica, antes de que se acabe el tiempo. Semifinalista de la GameJamPlus 2023-2024.",
            imgUrl: imgTomocho,
            pageUrl: "https://heinzdbv.itch.io/tom8-o",
            engine: "UNITY",
        },
        {
            title: "TRACES OF THE PAST",
            description: "Juego de experiencia sensorial. Recupera tus más preciadas memorias mientras exploras una mente oscurecida por el alzheimer. Desarrollado durante la Quantum GameJam 2023.",
            imgUrl: imgTracesOfThePast,
            pageUrl: "https://nathkalantar.itch.io/traces-of-the-past",
            engine: "UNITY",
        },
        {
            title: "OTAKUEST",
            description: "Juego de cartas 2D casual en primera persona, con elementos de novela visual. Interpreta a un Otaku mientras intenta socializar utilizando un cuestionable mazo de cartas.",
            imgUrl: imgOtakuest,
            pageUrl: "https://edyssonrbt.itch.io/otakuest",
            engine: "UNITY",
        },
        {
            title: "DITRO WORLD",
            description:  "Juego serio que mezcla el estilo de un rpg 2D con elementos 3D para la enseñanza de la física. Controla a Ditro, un robot avanzado creado con la misión de crecer en sabiduría.",
            imgUrl: imgDitroWorld,
            pageUrl: "https://larraondo.itch.io/ditroworld",
            engine: "UNITY",
        },
        {
            title: "ROLLING GUY",
            description: "Juego pixelart de plataformas 2D enfocado en la velocidad y precisión del jugador. Ábrete paso hasta tu destino final lo más rápido que puedas mientras despejas la zona de monstruos.",
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
            description: "Juego casual en 2D. Presta atención a los diálogos y ayuda a un ratoncito con ansiedad social a encontrar el queso ideal para sus clientes.",
            imgUrl: imgLaQueseria,
            pageUrl: "https://nathkalantar.itch.io/la-queseria",
            engine: "UNITY",
        },
        {
            title: "NO ES DOOM",
            description:  "Un juego Shooter del tipo Survival Zombie, donde deberás resistir oleadas de enemigos para impedir que... ¿Se pongan a bailar?",
            imgUrl: imgNoEsDoom,
            pageUrl: "https://larraondo.itch.io/noesdoomreescalado",
            engine: "UNITY",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const unrealProjects = [
        {
            title: "THE SANCTUARY",
            description: "Una Demo en primera persona que implementa aspectos básicos de Gameplay. Recolecta las estatuas para acceder al santuario, pero cuidado con el guardián.",
            imgUrl: imgTheSanctuary,
            pageUrl: "",
            engine: "UNREAL",
        },
        {
            title: "THE GUIDE",
            description: "Un juego de sigilo en primera persona. Dale órdenes a una IA y utiliza las cámaras de vigilancia para escapar del recinto sin ser descubiertos.",
            imgUrl: imgTheGuide,
            pageUrl: "",
            engine: "UNREAL",
        },
    ];

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    const inDevelopmentProjects = [
        {
            title: "HORROR GAME",
            description: "Un juego pixelart en 2.5D con temática de horror náutico. Controla a una niña mientras intenta encontrar a su madre dentro de una cueva submarina.",
            imgUrl: imgElCharco,
            engine: "UNREAL",
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
                        <h4><button><a href={MyPortfolio} download="Portafolio_AntonioSarmientoYon">Descargar Portafolio</a><ArrowDownCircle size={25}/></button></h4>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">UNITY</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">UNREAL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">En desarrollo</Nav.Link>
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
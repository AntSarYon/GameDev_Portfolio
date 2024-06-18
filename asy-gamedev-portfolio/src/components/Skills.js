import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter95 from "../assets/img/Meter95.png";
import meter90 from "../assets/img/Meter90.png";
import meter85 from "../assets/img/Meter85.png";
import meter80 from "../assets/img/Meter80.png";
import meter75 from "../assets/img/Meter75.png";
import meter70 from "../assets/img/Meter70.png";
import meter65 from "../assets/img/Meter65.png";
import meter60 from "../assets/img/Meter60.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () =>{
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };
    
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Mis habilidades
                        </h2>
                        <p>
                            Me especializo en la programación, sabiendo trabajar con los motores de UNITY y UNREAL ENGINE, y manteniendo un buen dominio de sus respectivos lenguajes de programación: C# y C++.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter85} alt="ImageMeter"/>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="ImageMeter"/>
                                <h5>UNITY</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="ImageMeter"/>
                                <h5>UNREAL ENGINE</h5>
                            </div>
                        </Carousel>
                        <p>
                            A continuación presento mi nivel de habilidad en las distintas áreas de programación dentro del desarrollo de videojuegos.<br/>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter90} alt="ImageMeter"/>
                                <h5>Gameplay y<br/>mecánicas</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>Interfraz de Usuario<br/>(UI)</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="ImageMeter"/>
                                <h5>Inteligencia Artificial<br/>(NPCs)</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="ImageMeter"/>
                                <h5>Animación de personajes</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="ImageMeter"/>
                                <h5>Cinemáticas</h5>
                            </div>
                            <div className="item">
                                <img src={meter65} alt="ImageMeter"/>
                                <h5>Red y<br/>multijugador</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="ImageColorSharp"/>
        </section>
    );
}
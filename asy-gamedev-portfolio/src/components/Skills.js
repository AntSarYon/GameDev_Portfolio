import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter95 from "../assets/img/meter1.svg";
import meter80 from "../assets/img/meter2.svg";
import meter90 from "../assets/img/meter3.svg";
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
                        <p>Respecta al desarrollo de videojuegos, cuento con basta experiencia en 2 motores: UNREAL ENGINE y UNITY.<br/> 
                            Del mismo modo, mantengo un adecuado dominio de los lenguajes de programación en los cuáles se basa cada uno de ellos.<br/>
                            A continuación, te presento mi nivel de domino con cada una de estas herramientas:</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter90} alt="ImageMeter"/>
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
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>UNREAL ENGINE</h5>
                            </div>
                        </Carousel>
                        <p>Por el lado del desarrollo web, me centro principalmente en la dimensión FrontEnd. <br/> 
                        Conozco los lenguajes HTML, CSS y JavaScript, teniendo experiencia principalmente con la librería de React.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter95} alt="ImageMeter"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="ImageMeter"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>Node.js</h5>
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
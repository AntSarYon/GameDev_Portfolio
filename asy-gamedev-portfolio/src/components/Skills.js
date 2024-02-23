import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
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
                        <p>lorem apsumsdn sjd djndjaed jhdbeh dwedb dewdbsjend asdasn dewqd nwe. <br></br> dne dw jh edn wedwe nddcmes udnfwepew hewf eojwe fnwoie jfwedi dnwo iefnlnidijij hdhuednd</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="ImageMeter"/>
                                <h5>Programador</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ImageMeter"/>
                                <h5>Diseñador</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ImageMeter"/>
                                <h5>Modelador 3D</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ImageMeter"/>
                                <h5>Artista 2D</h5>
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
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
                            My skills | Game Development
                        </h2>
                        <p>
                            I specialize in programming, knowing how to work with UNITY and UNREAL ENGINE engines, and maintaining a good level of skill in their respective programming languages: C# and C++.
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
                                <img src={meter70} alt="ImageMeter"/>
                                <h5>UNREAL ENGINE</h5>
                            </div>
                        </Carousel>
                        <p>
                            Although I specialize in programming, I have also worked in other areas within game development. <br/>
                            Below, I share my ability to work in different roles according to my previous experience.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter90} alt="ImageMeter"/>
                                <h5>Gameplay &<br/>Mechanics</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="ImageMeter"/>
                                <h5>User Interface<br/>(UI)</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="ImageMeter"/>
                                <h5>AI (NPCs)</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="ImageMeter"/>
                                <h5>Animations &<br/>Cinematics</h5>
                            </div>
                            <div className="item">
                                <img src={meter60} alt="ImageMeter"/>
                                <h5>Network &<br/>Multiplayer</h5>
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
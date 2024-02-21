import { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
//import headerImg from "../assets/img/header-img.svg"; // --> Imagen con fondo Blanco
import headerImg from "../assets/img/LarryDev_Transparent.png";   // Imagen sin fondo blanco (PNG)
//------------------------------------------------------------------

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Game Developer", "Game Designer", "3D Modeler"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    //- - - - - - - - - - - - - - - - - - - - - - - - - -  -

    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Bienvenido a mi portafolio</span>
                        <h1>{`Hola, soy Antonio Sarmiento Yon `}<br/><span className='wrap'>{text}</span></h1>
                        <p>lorem ipsum cmdsicndsifcnfncwdsiu  fudiesfhcdjus cesbfdjhsf efgbdsjf dsfudscdsc dscc</p>
                        <button onClick={() => console.log('connect')}>Conectémos <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
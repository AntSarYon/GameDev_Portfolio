import { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import MyCV from "../assets/cv/CV_AntonioSarmiento.pdf"; // --> Imagen con fondo Blanco
import headerImg from "../assets/img/Antonio_Perfil_2.png";   // Imagen sin fondo blanco (PNG)
//------------------------------------------------------------------

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Game Developer", "Web Developer"];
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
                        <h1>Hola, soy <br/>{`Antonio Sarmiento Yon`}<br/>|<span className='wrap'>{text}</span></h1>
                        <p>Bachiller de Ingeniería de Sistemas en la Universidad de Lima. <br/> Especializado en el desarrollo de Software:<br/>Videojuegos | Páginas Web</p>
                        <button><a href={MyCV} download="CV_AntonioSarmientoYon">Descargar C.V. </a><ArrowDownCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
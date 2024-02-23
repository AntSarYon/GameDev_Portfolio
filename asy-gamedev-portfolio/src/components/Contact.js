import { Container, Row, Col, Button} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    return(
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contáctanos'/>
                    </Col>
                    <Col md={6}>
                        <h2>Mentengamos el contacto</h2>
                        <h3>Envíame un correo con el motivo de tu comunicación.</h3>
                        <Button className='primary' size="lg" href="mailto:antoniosaryon155@gmail.com" target='_blank'>Escribir correo</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
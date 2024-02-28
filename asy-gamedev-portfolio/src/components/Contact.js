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
                    <Col md={6} >
                        <h2>Let's keep in touch</h2>
                        <h3>Send me an email with the reason for your communication to: <i>antoniosaryon155@gmail.com</i></h3>
                        <Button variant="warning" size="lg" href="mailto:antoniosaryon155@gmail.com" target='_blank'>Write mail</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
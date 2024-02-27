import {  Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, pageUrl, engine}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <a href="https://larraondo.itch.io" target='_blank'><img src={imgUrl}/></a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h6>Desarrollado con: {engine}</h6>
                    <a href={pageUrl} target='_blank'><h5>Visitar sitio</h5></a>
                </div>
            </div>
        </Col>
    )
}
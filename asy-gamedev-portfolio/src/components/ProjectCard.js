import {  Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <a href="https://larraondo.itch.io" target='_blank'><img src={imgUrl}/></a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href="https://larraondo.itch.io" target='_blank'><h5>Visitar</h5></a>
                </div>
            </div>
        </Col>
    )
}
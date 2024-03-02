import {  Button, Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, pageUrl, engine}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h5>{engine}</h5>
                    <Button variant="warning" href={pageUrl} target='_blank'><h7>Visit site</h7></Button>
                </div>
            </div>
        </Col>
    )
}
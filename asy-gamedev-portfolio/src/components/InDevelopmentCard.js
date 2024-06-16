import {  Col } from "react-bootstrap";

export const InDevelopmentCard = ({title, description, imgUrl, engine}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imgUrl}/>
                <div className="proj-txtx blackBG">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h5>{engine}</h5>
                </div>
            </div>
        </Col>
    )
}
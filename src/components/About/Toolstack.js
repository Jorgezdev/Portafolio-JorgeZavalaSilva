import React from "react";
import { Col, Row } from "react-bootstrap";
import autonomia from "../../Assets/TechIcons/autonomia.png";
import comunicacion from "../../Assets/TechIcons/comunicacion.jpg";
import trabajoenEquipo from "../../Assets/TechIcons/trabajoenEquipo.png";





function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={comunicacion} alt="comunicacion" className="tech-icon-images" />
        <div className="tech-icons-text">Comunicación efectiva (no tecnica)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={trabajoenEquipo} alt="Trabajo en equipo" className="tech-icon-images" />
        <div className="tech-icons-text">Trabajo en equipo</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={autonomia} alt="autonomia" className="tech-icon-images" />
        <div className="tech-icons-text">Autonomía</div>
      </Col>


    </Row>
  );
}

export default Toolstack;

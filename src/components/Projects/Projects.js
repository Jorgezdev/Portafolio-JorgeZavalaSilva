import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import conchaliWeb from "../../Assets/Projects/Conchaliweb.png";
import Jotatube from "../../Assets/Projects/Jotatube.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis recientes <strong className="blue">Proyectos de trabajo</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí tienes algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conchaliWeb}
              isBlog={false}
              title="Municipalidad de Conchalí"
              description="Sitio web institucional de la comuna de Conchalí."
              ghLink="https://github.com/Jorgezdev/organigramafinal/"
              demoLink="https://conchali.cl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jotatube}
              isBlog={false}
              title="frontend youtubeclone con react y typescript"
              description="frontend youtubeclone con react y typescript"
              ghLink="https://github.com/Jorgezdev/Jotatube"
              demoLink="https://jorgezdev.github.io/Jotatube/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

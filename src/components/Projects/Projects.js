import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import conchaliWeb from "../../Assets/Projects/Conchaliweb.png";
import Jotatube from "../../Assets/Projects/Jotatube.png";
import BancoClonestado from "../../Assets/Projects/BancoClonestado.png";


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
              title="Frontend youtube clone con 
                     react y typescript"
              description="Frontend youtube clone 
                            con react y typescript"
              ghLink="https://github.com/Jorgezdev/Jotatube"
              demoLink="https://jorgezdev.github.io/Jotatube/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BancoClonestado}
              isBlog={false}
              title="Banco Clon Estado"
              description="Clon del sitio web del Banco Estado."
              ghLink="https://github.com/Jorgezdev/ClonWeb-BancoEstado"
              demoLink="https://jorgezdev.github.io/ClonWeb-BancoEstado/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

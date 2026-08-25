import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTANME <span className="blue"> PRESENTARME</span>
            </h1>
            <p className="home-about-body">
              Soy un Desarrollador Web Full Stack enfocado en transformar ideas en productos digitales escalables y de alto rendimiento. A lo largo de mi trayectoria, he desarrollado una visión integral que conecta arquitecturas backend sólidas con experiencias de usuario fluidas en el frontend.
              <br />
              <br />
              Mi stack principal incluye
              <i>
                <b className="blue">
                  {" "}
                  JavaScript, React, HTML, CSS, Node.js, {" "}
                </b>
              </i>
              Además, integro CMS headless y tradicionales como Strapi y WordPress para construir soluciones web dinámicas, eficientes y adaptadas a las necesidades del proyecto.
              <br />
              <br />
              Me apasiona el desarrollo de aplicaciones
              <i>
                <b className="blue">
                  {" "}
                  Web,{" "}
                </b>
              </i>
              y la integración de
                            <i>
                <b className="blue">
                  {" "}
                  APIs,{" "}
                </b>
              </i>
              buscando constantemente formas innovadoras de optimizar cada desarrollo.
              <br />
              <br />
              Disfruto encarar desafíos técnicos construyendo proyectos modernos con 
              <b className="blue"> Node.js </b> y frameworks como{" "} 
              <i>
                <b className="blue">React.js</b> y{" "}
                <b className="blue">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

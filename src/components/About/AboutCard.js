import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="blue">Jorge Zavala</span>{" "}
            de <span className="blue">Santiago de Chile</span>.
            <br />
            Actualmente trabajo como{" "}
            <span className="blue">Full Stack Developer</span> 
            <br />Poseo experiencia en el{" "}
            <span className="blue">desarrollo, despliegue e infraestructura web.</span>
            <br />
            <br />
            Fuera de la programación, me encanta participar en actividades 
            que me mantienen creativo e inspirado:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender nuevas habilidades ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y explorar nuevos lugares 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(126, 134, 172)" }}>
            "Transformamos lógica en soluciones."{" "}
          </p>
          <footer className="blockquote-footer">Jorge Zavala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

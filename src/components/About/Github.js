import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Código de  <strong className="blue">Github</strong>
      </h1>
      <GitHubCalendar
        username="Jorgezdev"
        blockSize={30}
        blockMargin={10}
        color="#3d49f3"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;

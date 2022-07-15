import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./_smallcard.scss";

function SmallCard({
  label = "Title",
  textContent = "textttt",
  time = "2:38 p.m.",
  svg,
  temperature = "18°",
  className,
}) {
  return (
    <Card className={className}>
      <Row className="p-2">
        <Col>
          <h5 className="small-card-title-h5">{label}</h5>
          <p className="small-card-text">{textContent}</p>
          <span className="small-card-hour">{time}</span>
        </Col>
        <Col>
          <Card.Img src={svg} />
        </Col>
        <Col className="small-card-temperature">
          <p>{temperature}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default SmallCard;

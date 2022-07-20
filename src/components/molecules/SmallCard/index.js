import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./_smallcard.scss";

const SmallCard = ({
  label = "Title",
  textContent = "textttt",
  time = "2:38 p.m.",
  svg,
  temperature = "18°",
  className,
  size = "s",
  direction = "o",
}) => {
  return (
    <>
      {size === "s" ? (
        direction === "o" ? (
          <Card className={className}>
            <Row className="p-2 small-card-media-less-xxl">
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
        ) : (
          <Card></Card>
        )
      ) : (
        <Row className="p-2 xs-card-blue">
          <Col className="xs-card-content">
            <h5 className="small-card-title-h5 mt-2">{label}</h5>
          </Col>
          <Col className="xs-card-content content-temperature">
            <p>{temperature}</p>
          </Col>
          <Col className="xs-card-content">
            <Card.Img src={svg} className="xs" />
          </Col>
        </Row>
      )}
    </>
  );
};

export default SmallCard;

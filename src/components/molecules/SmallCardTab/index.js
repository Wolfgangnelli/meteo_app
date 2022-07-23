import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { kelvinToCelsius } from "../../../utils";
import "./_smallcardtab.scss";

const SmallCardTab = ({ data }) => {
  const { name, averageTemp, icon } = data;

  return (
    <Row className="p-2 xs-card-blue">
      <Col className="xs-card-content">
        <h5 className="small-card-title-h5 mt-2">{name}</h5>
      </Col>
      <Col className="xs-card-content content-temperature">
        <p>{kelvinToCelsius(averageTemp)}°</p>
      </Col>
      <Col className="xs-card-content">
        <Card.Img src={`/svg/${icon}.svg`} className="xs" />
      </Col>
    </Row>
  );
};

export default SmallCardTab;

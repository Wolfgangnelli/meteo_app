import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  formattingTime,
  kelvinToCelsius,
  formattingDate,
} from "../../../utils";
import "./_smallcard.scss";

const SmallCard = ({
  data = {},
  className = "",
  size = "s",
  direction = "o",
}) => {
  const { city, list } = data;

  return (
    <>
      {size === "s" ? (
        direction === "o" ? (
          <Card className={className}>
            <Row className="p-2 small-card-media-less-xxl">
              <Col>
                <h5 className="small-card-title-h5">{city.name}</h5>
                <p className="small-card-text">
                  {formattingDate(list[0].dt_txt)}
                </p>
                <span className="small-card-hour">
                  {formattingTime(list[0].dt_txt)}:00
                </span>
              </Col>
              <Col>
                <Card.Img src={`/svg/${list[0].weather[0].icon}.svg`} />
              </Col>
              <Col className="small-card-temperature">
                <p>{kelvinToCelsius(list[0].main.temp)}</p>
              </Col>
            </Row>
          </Card>
        ) : (
          <Card></Card>
        )
      ) : (
        <Row className="p-2 xs-card-blue">
          <Col className="xs-card-content">
            <h5 className="small-card-title-h5 mt-2">{city?.name}</h5>
          </Col>
          <Col className="xs-card-content content-temperature">
            <p>{kelvinToCelsius(list[0]?.main?.temp)}</p>
          </Col>
          <Col className="xs-card-content">
            <Card.Img
              src={`/svg/${list[0]?.weather[0]?.icon}.svg`}
              className="xs"
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default SmallCard;

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  kelvinToCelsius,
  convertUnixTimestapToDate,
  convertUnixTimestapToTime,
} from "../../../utils";
import "./_smallcard.scss";

const SmallCard = ({
  data = {},
  className = "",
  size = "s",
  direction = "o",
}) => {
  const { main, weather, dt, name } = data;

  return (
    <>
      {size === "s" && direction === "o" && (
        <Card className={className}>
          <Row className="p-2 small-card-media-less-xxl">
            <Col>
              <h5 className="small-card-title-h5">{name}</h5>
              <p className="small-card-text">{convertUnixTimestapToDate(dt)}</p>
              <span className="small-card-hour">
                {convertUnixTimestapToTime(dt, name === "London" ? "GB" : "")}
              </span>
            </Col>
            <Col className="small-card-image">
              <Card.Img src={`/svg/${weather[0].icon}.svg`} />
            </Col>
            <Col className="small-card-temperature">
              <p>{kelvinToCelsius(main.temp)}°</p>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default SmallCard;

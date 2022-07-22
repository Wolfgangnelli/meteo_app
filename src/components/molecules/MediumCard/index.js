import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { formattingTime, kelvinToCelsius } from "../../../utils";
import "./_mediumcard.scss";

function MediumCard() {
  const { forecasts } = useSelector((state) => state.forecastData);

  return (
    <>
      {forecasts && Object.keys(forecasts).length && (
        <Card className="medium-card">
          <Row>
            <Col className="thermometer-label-col">
              <p className="thermometer-label">Now</p>
            </Col>
          </Row>
          <Row className="card-section mx-auto">
            <Col
              xs={5}
              className="col-one position-relative"
              style={{ color: "white" }}
            >
              <span
                style={{
                  fontSize: 2 + "rem",
                  fontWeight: 700,
                  position: "absolute",
                }}
              >
                {kelvinToCelsius(forecasts[0].list[0].main.temp)}°
              </span>
              <span
                style={{
                  fontSize: 1.5 + "rem",
                  position: "absolute",
                  top: 25 + "%",
                }}
              >
                {kelvinToCelsius(forecasts[0].list[1].main.temp)}°
              </span>
              <span
                style={{
                  fontSize: 1.5 + "rem",
                  position: "absolute",
                  top: 48 + "%",
                }}
              >
                {kelvinToCelsius(forecasts[0].list[2].main.temp)}°
              </span>
              <span
                style={{
                  fontSize: 1.5 + "rem",
                  position: "absolute",
                  top: 70 + "%",
                }}
              >
                {kelvinToCelsius(forecasts[0].list[3].main.temp)}°
              </span>
              <span
                style={{
                  fontSize: 1.5 + "rem",
                  position: "absolute",
                  bottom: -5 + "%",
                  opacity: 0.5,
                }}
              >
                {kelvinToCelsius(forecasts[0].list[4].main.temp)}°
              </span>
            </Col>
            <Col
              xs={2}
              style={{ marginTop: 8 + "%" }}
              className="thermometer-container"
            >
              <Row style={{ height: 100 + "%" }} className="mx-auto">
                <Col xs="auto">
                  <div className="thermometer">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="dot dot-3"></span>
                    <span className="dot dot-4"></span>
                    <span className="dot dot-5"></span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              xs={5}
              className="position-relative thermometer-hours"
              style={{ marginTop: 5 + "%", color: "white" }}
            >
              <span style={{ visibility: "hidden" }}>
                {formattingTime(forecasts[0].list[0].dt_txt)} p.m.
              </span>
              <span style={{ position: "absolute", top: 25 + "%" }}>
                {formattingTime(forecasts[0].list[1].dt_txt)}{" "}
                {formattingTime(forecasts[0].list[1].dt_txt) >= 12
                  ? "p.m."
                  : "a.m."}
              </span>
              <span style={{ position: "absolute", top: 48 + "%" }}>
                {formattingTime(forecasts[0].list[2].dt_txt)}{" "}
                {formattingTime(forecasts[0].list[2].dt_txt) >= 12
                  ? "p.m."
                  : "a.m."}
              </span>
              <span style={{ position: "absolute", top: 70 + "%" }}>
                {formattingTime(forecasts[0].list[3].dt_txt)}{" "}
                {formattingTime(forecasts[0].list[3].dt_txt) >= 12
                  ? "p.m."
                  : "a.m."}
              </span>
              <span
                style={{ position: "absolute", bottom: -3 + "%", opacity: 0.5 }}
              >
                {formattingTime(forecasts[0].list[4].dt_txt)}{" "}
                {formattingTime(forecasts[0].list[4].dt_txt) >= 12
                  ? "p.m."
                  : "a.m."}
              </span>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
}

export default MediumCard;

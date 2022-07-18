import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./_mediumcard.scss";

function MediumCard() {
  return (
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
            22°
          </span>
          <span
            style={{
              fontSize: 1.5 + "rem",
              position: "absolute",
              top: 25 + "%",
            }}
          >
            22°
          </span>
          <span
            style={{
              fontSize: 1.5 + "rem",
              position: "absolute",
              top: 48 + "%",
            }}
          >
            22°
          </span>
          <span
            style={{
              fontSize: 1.5 + "rem",
              position: "absolute",
              top: 70 + "%",
            }}
          >
            22°
          </span>
          <span
            style={{
              fontSize: 1.5 + "rem",
              position: "absolute",
              bottom: -5 + "%",
              opacity: 0.5,
            }}
          >
            22°
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
          <span style={{ visibility: "hidden" }}>4 p.m.</span>
          <span style={{ position: "absolute", top: 25 + "%" }}>4 p.m.</span>
          <span style={{ position: "absolute", top: 48 + "%" }}>4 p.m.</span>
          <span style={{ position: "absolute", top: 70 + "%" }}>4 p.m.</span>
          <span
            style={{ position: "absolute", bottom: -3 + "%", opacity: 0.5 }}
          >
            4 p.m.
          </span>
        </Col>
      </Row>
    </Card>
  );
}

export default MediumCard;

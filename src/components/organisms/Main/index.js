import React from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import { SmallCard } from "../../molecules";
import { SButton } from "../../atoms";
import clearDay from "../../../assets/svg/clear-day.svg";
import cloudy from "../../../assets/svg/cloudy.svg";

const Main = ({ className }) => {
  const iconPlus = <i className="fa-regular fa-square-plus"></i>;

  return (
    <main className={className}>
      <Row>
        <Col lg={8} className="py-3">
          <Card style={{ borderRadius: 20 + "px" }}>
            <Card.Img
              src="https://picsum.photos/2000/1100"
              style={{ borderRadius: 20 + "px" }}
            />
            <Card.ImgOverlay style={{ color: "white" }}>
              <Card.Title>Turin</Card.Title>
              <Card.Text>Friday 18, semptember</Card.Text>
              <Card.Text>Sunny</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col
          lg={4}
          className="d-flex align-items-start flex-column flex-wrap pb-3 ps-3"
        >
          <Row className="mb-auto d-flex align-self-center my-auto">
            <Col>
              <SButton
                label="Aggiungi città"
                variant="link"
                className="btn-variant-link"
                icon={iconPlus}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SmallCard
                label="London"
                textContent="Friday 18, september"
                time="2:38 p.m."
                svg={clearDay}
                temperature="20°"
                className="small-card"
              />
              <SmallCard
                label="Rome"
                textContent="Friday 18, september"
                time="3:38 p.m."
                svg={cloudy}
                temperature="15°"
                className="small-card mt-3"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={8}>Q3</Col>
        <Col md={4}>Q4</Col>
      </Row>
    </main>
  );
};

export default Main;

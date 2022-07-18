import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SmallCard,
  MainCardImg,
  MediumCard,
  MediumTabs,
  Localization,
} from "../../molecules";
import { SButton, Search } from "../../atoms";
import clearDay from "../../../assets/svg/clear-day.svg";
import cloudy from "../../../assets/svg/cloudy.svg";
import "./_main.scss";

const Main = ({ className }) => {
  const iconPlus = <i className="fa-regular fa-square-plus"></i>;

  return (
    <main className={className}>
      <Row className="main-section-1">
        <Col lg={8}>
          <MainCardImg className="main-card-img" />
        </Col>
        <Col lg={4} className="main-section-1-col-2">
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
          <Row className="mx-auto">
            <Col className="main-section-1-col-2-row-2">
              <SmallCard
                label="London"
                textContent="Friday 18, september"
                time="2:38 p.m."
                svg={clearDay}
                temperature="20°"
                className="small-card-blue"
              />
              <SmallCard
                label="Rome"
                textContent="Friday 18, september"
                time="3:38 p.m."
                svg={cloudy}
                temperature="15°"
                className="small-card-gray"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="main-section-2">
        <Col lg={8}>
          <Row className="main-section-2-row-1">
            <Col lg={4}>
              <div style={{ height: 39 + "px" }}>
                <label className="thermometer-label">Today</label>
              </div>
              <MediumCard />
            </Col>
            <Col lg={8} className="medium-tabs-col">
              <MediumTabs />
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Search />
          <Localization title="Localization" label="Add localization" />
        </Col>
      </Row>
    </main>
  );
};

export default Main;

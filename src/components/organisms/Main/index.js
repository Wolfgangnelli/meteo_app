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

const Main = ({ className }) => {
  const iconPlus = <i className="fa-regular fa-square-plus"></i>;

  return (
    <main className={className}>
      <Row>
        <Col lg={8} className="py-3">
          <MainCardImg className="main-card-img relative" />
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
                className="small-card-blue"
              />
              <SmallCard
                label="Rome"
                textContent="Friday 18, september"
                time="3:38 p.m."
                svg={cloudy}
                temperature="15°"
                className="small-card-gray mt-3"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Row>
            <Col lg={4}>
              <MediumCard />
            </Col>
            <Col lg={8}>
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

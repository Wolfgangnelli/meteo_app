import React, { useState } from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import { SmallCard } from "../index";
import { Moves } from "../../atoms";
import "./_mediumtabs.scss";
import svg1 from "../../../assets/svg/dust-wind.svg";
import svg2 from "../../../assets/svg/extreme-day-rain.svg";
import svg3 from "../../../assets/svg/fog-day.svg";

function MediumTabs() {
  const [key, setKey] = useState("week");
  return (
    <Tabs id="tab-forecast" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="week" title="This week">
        <Row
          className="d-flex justify-content-evenly mt-2"
          style={{ height: 90 + "%" }}
        >
          <Col md={3}>
            <SmallCard
              className="xs-card-blue"
              label="Saturday"
              temperature="18°"
              svg={svg1}
              size="xs"
              direction="v"
            />
          </Col>
          <Col md="auto"></Col>
          <Col md={3}>
            <SmallCard
              className="xs-card-blue"
              label="Sunday"
              temperature="21°"
              svg={svg2}
              size="xs"
              direction="v"
            />
          </Col>
          <Col md="auto"></Col>
          <Col md={3}>
            <SmallCard
              className="xs-card-blue"
              label="Monday"
              temperature="20°"
              svg={svg3}
              size="xs"
              direction="v"
            />
          </Col>
        </Row>
        <Moves />
      </Tab>
      <Tab eventKey="month" title="This month">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus nesciunt explicabo totam ipsum adipisci perferendis sunt a
        officiis quod tempora modi, sed sapiente ea odio, excepturi veritatis
        temporibus? Aut.
        <Moves />
      </Tab>
    </Tabs>
  );
}

export default MediumTabs;

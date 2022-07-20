import React, { useState } from "react";
import { Tabs, Tab, Row, Col, Card, Image } from "react-bootstrap";
import { SmallCard } from "../index";
import { Moves } from "../../atoms";
import "./_mediumtabs.scss";
import svg1 from "../../../assets/svg/dust-wind.svg";
import svg2 from "../../../assets/svg/extreme-day-rain.svg";
import svg3 from "../../../assets/svg/fog-day.svg";
import svg4 from "../../../assets/svg/hurricane.svg";

function MediumTabs() {
  const [key, setKey] = useState("week");
  return (
    <Tabs id="tab-forecast" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab
        eventKey="week"
        title="This week"
        className={key !== "week" ? "display-none" : "tab-week"}
      >
        <div className="tab-card-container">
          <SmallCard
            className="xs-card-blue"
            label="Saturday"
            temperature="18°"
            svg={svg1}
            size="xs"
            direction="v"
          />

          <SmallCard
            className="xs-card-blue"
            label="Sunday"
            temperature="21°"
            svg={svg2}
            size="xs"
            direction="v"
          />

          <SmallCard
            className="xs-card-blue"
            label="Monday"
            temperature="20°"
            svg={svg3}
            size="xs"
            direction="v"
          />
        </div>
        <Moves />
      </Tab>
      <Tab
        eventKey="month"
        title="This month"
        className={key !== "month" ? "display-none" : "tab-week"}
      >
        <div className="tab-card-container-month">
          <Card style={{ height: 100 + "%", borderRadius: 20 + "px" }}>
            <Row style={{ height: 100 + "%" }} className="month-container">
              <Col
                sm={5}
                style={{ height: 100 + "%", padding: 10 + "px" }}
                className="details-1"
              >
                <p className="date-day">Fri, 25 Set</p>
                <Image src={svg4} className="image-fluid" />
              </Col>
              <Col sm={7} className="details-2">
                <Row id="temp-details-container">
                  <Col className="temp-details-1">
                    <div className="temp-details-1-xs">
                      <p className="temperature">10°</p>
                      <p className="p-details">Strong wind</p>
                    </div>
                    <p>The high will be 14°C, the low will be 8°C.</p>
                  </Col>
                  <Col className="temp-details-2">
                    <p>
                      Humidity: <span>55%</span>
                    </p>
                    <p>
                      UV: <span>3</span>
                    </p>
                    <p>
                      Dew point: <span>3°C</span>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
        <Moves />
      </Tab>
    </Tabs>
  );
}

export default MediumTabs;

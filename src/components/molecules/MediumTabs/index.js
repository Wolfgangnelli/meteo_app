import React, { useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Card, Image } from "react-bootstrap";
import { SmallCardTab } from "../SmallCardTab";
import { getNextDay } from "../../../utils";
import { Moves } from "../../atoms";
import { useSelector } from "react-redux";
import "./_mediumtabs.scss";
import svg4 from "../../../assets/svg/hurricane.svg";

function MediumTabs() {
  const [key, setKey] = useState("week");
  const { forecasts } = useSelector((state) => state.forecastData);
  const [day1, setDay1] = useState({});
  const [day2, setDay2] = useState({});
  const [day3, setDay3] = useState({});

  useEffect(() => {
    if (!!forecasts.length) {
      console.log(forecasts.length);
      if (!day1.length) {
        console.log(forecasts);
        setDay1(getNextDay(forecasts, forecasts[0].list[0].dt_txt));
      } else if (!!day1.length && !day2.length) {
        console.log(day1);
        setDay2(getNextDay(forecasts, day1.day));
      } else if (!!day2.length && !day3.length) {
        console.log(day2);
        setDay3(getNextDay(forecasts, day2.day));
      }
    }
    if (!!day1.length && !!day2.length && !!day3.length) {
      console.log(day1, day2, day3);
    }
  }, [forecasts, day1, day2]);

  return (
    <Tabs id="tab-forecast" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab
        eventKey="week"
        title="This week"
        className={key !== "week" ? "display-none" : "tab-week"}
      >
        <div className="tab-card-container">
          {/*  <SmallCardTab
            data={day1}
          />

          <SmallCardTab
            data={day2}
          />

          <SmallCardTab
            data={day3}
          /> */}
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

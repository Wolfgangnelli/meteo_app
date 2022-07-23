import React, { useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Card, Image } from "react-bootstrap";
import { SmallCardTab } from "../index";
import { getNextDay, kelvinToCelsius } from "../../../utils";
import { Moves } from "../../atoms";
import { useSelector } from "react-redux";
import "./_mediumtabs.scss";

function MediumTabs() {
  const [key, setKey] = useState("week");
  const { forecasts } = useSelector((state) => state.forecastData);
  const [day1, setDay1] = useState({});
  const [day2, setDay2] = useState({});
  const [day3, setDay3] = useState({});
  const [last, setLast] = useState(null);

  const formattingDateForTab = (dt = "") => {
    let d = new Date(dt);
    let convertDinStr = d + "";
    let splitDate = convertDinStr.split(" ");
    return `${splitDate[0]}, ${splitDate[2]} ${splitDate[1]}`;
  };

  const capitalizeFirstLetter = (str = "") => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (
      !!forecasts.length &&
      (last === null || last !== forecasts[0].city.id)
    ) {
      console.log(forecasts.length);
      if (
        !!Object.keys(day1).length === false ||
        last !== forecasts[0].city.id
      ) {
        console.log(forecasts);
        setDay1(getNextDay(forecasts, forecasts[0].list[0].dt_txt));
      } else if (
        !!Object.keys(day1).length &&
        (!!Object.keys(day2).length === false || last !== forecasts[0].city.id)
      ) {
        console.log(day1);
        setDay2(getNextDay(forecasts, day1.day));
      } else if (
        !!Object.keys(day2).length &&
        (!!Object.keys(day3).length === false || last !== forecasts[0].city.id)
      ) {
        console.log(day2);
        setDay3(getNextDay(forecasts, day2.day));
        setLast(forecasts[0].city.id);
      }
    }
    if (
      !!Object.keys(day1).length &&
      !!Object.keys(day2).length &&
      !!Object.keys(day3).length
    ) {
      console.log(!!day1.length);
      console.log(day1, day2, day3);
    }
  }, [forecasts, day1, day2, day3]);

  return (
    <Tabs id="tab-forecast" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab
        eventKey="week"
        title="This week"
        className={key !== "week" ? "display-none" : "tab-week"}
      >
        {!!Object.keys(day1).length &&
          !!Object.keys(day2).length &&
          !!Object.keys(day3).length && (
            <div className="tab-card-container">
              <SmallCardTab data={day1} />
              <SmallCardTab data={day2} />
              <SmallCardTab data={day3} />
            </div>
          )}
        <Moves />
      </Tab>
      <Tab
        eventKey="month"
        title="This month"
        className={key !== "month" ? "display-none" : "tab-week"}
      >
        <div className="tab-card-container-month">
          {!!forecasts.length && (
            <Card style={{ height: 100 + "%", borderRadius: 20 + "px" }}>
              <Row style={{ height: 100 + "%" }} className="month-container">
                <Col
                  sm={5}
                  style={{ height: 100 + "%", padding: 10 + "px" }}
                  className="details-1"
                >
                  <p className="date-day">
                    {formattingDateForTab(forecasts[0].list[39].dt_txt)}
                  </p>
                  <Image
                    src={`/svg/${forecasts[0].list[39].weather[0].icon}.svg`}
                    className="image-fluid"
                  />
                </Col>
                <Col sm={7} className="details-2">
                  <Row id="temp-details-container">
                    <Col className="temp-details-1">
                      <div className="temp-details-1-xs">
                        <p className="temperature">
                          {kelvinToCelsius(forecasts[0].list[39].main.temp)}°
                        </p>
                        <p className="p-details">
                          {capitalizeFirstLetter(
                            forecasts[0].list[39].weather[0].description
                          )}
                        </p>
                      </div>
                      <p>
                        The high will be {forecasts[0].list[39].main.temp_max}
                        °C, the low will be{" "}
                        {forecasts[0].list[39].main.temp_min}
                        °C.
                      </p>
                    </Col>
                    <Col className="temp-details-2">
                      <p>
                        Humidity:{" "}
                        <span>{forecasts[0].list[39].main.humidity}%</span>
                      </p>
                      <p>
                        Pressure:{" "}
                        <span>{forecasts[0].list[39].main.pressure}</span>
                      </p>
                      <p>
                        Wind Speed:{" "}
                        <span>
                          {forecasts[0].list[39].wind.speed}
                          m/s
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          )}
        </div>
        <Moves />
      </Tab>
    </Tabs>
  );
}

export default MediumTabs;

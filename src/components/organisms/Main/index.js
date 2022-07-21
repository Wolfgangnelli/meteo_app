import React, { useEffect, useContext } from "react";
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
import {
  updateForecastNotSelected,
  getForecastData,
} from "../../../redux/actions/forecastAction";
import { useDispatch, useSelector } from "react-redux";
import { ForecastDataContext } from "../../../contexts/forecastscontext";
import { findCity } from "../../../utils";
import "./_main.scss";

const Main = ({ className }) => {
  const iconPlus = <i className="fa-regular fa-square-plus fa-xl"></i>;

  const dispatch = useDispatch();
  const forecastData = useSelector((state) => state.forecastData);
  const { forecasts, error, loading, forecastsNotSelected } = forecastData;
  const [data, setData] = useContext(ForecastDataContext);

  useEffect(() => {
    /*     dispatch(getForecastData("45.070312", "7.6868565"));
    dispatch(getForecastData("51.5073219", "-0.1276474"));
    dispatch(getForecastData("41.8947", "12.4839")); */
  }, []);

  useEffect(() => {
    if (loading === false && forecasts) {
      console.log(forecasts);
      setData(findCity(forecasts, "Turin"));
    }
  }, [forecasts]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      dispatch(updateForecastNotSelected(data.city.id));
    }
  }, [data]);

  return (
    <main className={className}>
      {data && Object.keys(data).length && (
        <>
          <section>
            <Row className="main-section-1">
              <Col lg={8} style={{ height: 100 + "%" }}>
                <MainCardImg className="main-card-img" />
              </Col>
              <Col lg={4} className="main-section-1-col-2">
                <Row className="d-flex align-self-center my-auto">
                  <Col>
                    <SButton
                      label="Aggiungi città"
                      variant="link"
                      className="btn-variant-link"
                      icon={iconPlus}
                    />
                  </Col>
                </Row>
                <Row className="q2">
                  <Col className="main-section-1-col-2-row-2">
                    {forecastsNotSelected &&
                      forecastsNotSelected.length > 0 &&
                      forecastsNotSelected.map((item, idx) => (
                        <SmallCard
                          data={item}
                          className={
                            idx < 1 ? "small-card-blue" : "small-card-gray"
                          }
                        />
                      ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
          <section>
            <Row className="main-section-2">
              <Col lg={8}>
                <Row className="main-section-2-row-1">
                  <Col lg={4}>
                    <div
                      style={{ height: 79.8 + "px" }}
                      className="thermometer-label-container"
                    >
                      <label className="thermometer-label">Today</label>
                    </div>
                    <MediumCard />
                  </Col>
                  <Col lg={8} className="medium-tabs-col">
                    <MediumTabs />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} className="q4">
                <Search />
                <Localization title="Localization" label="Add localization" />
              </Col>
            </Row>
          </section>
        </>
      )}
    </main>
  );
};

export default Main;

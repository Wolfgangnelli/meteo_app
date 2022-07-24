import React, { useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import {
  SmallCard,
  MainCardImg,
  MediumCard,
  MediumTabs,
  Localization,
} from "../../molecules";
import { SButton, Search, Loader, Message } from "../../atoms";
import {
  updateForecastNotSelected,
  getFiveDaysForecastData,
  getCurrentWeather,
} from "../../../redux/actions/forecastAction";
import { useDispatch, useSelector } from "react-redux";
import { ForecastDataContext } from "../../../contexts/forecastscontext";
import { findCity } from "../../../utils";
import {
  TURIN_LAT,
  TURIN_LON,
  LONDON_LAT,
  LONDON_LON,
  ROME_LAT,
  ROME_LON,
} from "../../../config/constants";
import "./_main.scss";

const Main = ({ className }) => {
  const iconPlus = <i className="fa-regular fa-square-plus fa-xl"></i>;

  const dispatch = useDispatch();
  const currentWeathersData = useSelector((state) => state.currentWeathersData);

  const {
    currentWeathers,
    error: errorCurrentWeather,
    loading: loadingCurrentWeathers,
    forecastsNotSelected,
  } = currentWeathersData;

  const [data, setData] = useContext(ForecastDataContext);

  useEffect(() => {
    dispatch(getFiveDaysForecastData(TURIN_LAT, TURIN_LON));
    dispatch(getCurrentWeather(TURIN_LAT, TURIN_LON));
    dispatch(getCurrentWeather(LONDON_LAT, LONDON_LON));
    dispatch(getCurrentWeather(ROME_LAT, ROME_LON));
  }, []);

  useEffect(() => {
    loadingCurrentWeathers === false &&
      currentWeathers &&
      setData(findCity(currentWeathers, "Turin"));
  }, [currentWeathers]);

  useEffect(() => {
    data &&
      Object.keys(data).length > 0 &&
      dispatch(updateForecastNotSelected(data.id));
  }, [data]);

  return (
    <main className={className}>
      {loadingCurrentWeathers && <Loader />}
      {errorCurrentWeather && (
        <Message variant="danger">
          <h3 className="text-danger">
            Sorry, an Error occurs. <i className="fas fa-bug"></i>
          </h3>
          <p>({errorCurrentWeather})</p>
          <p className="fw-bold fs-2 text-info">
            Soon we will restore the service. Try later{" "}
            <i className="fas fa-hand-scissors" style={{ color: "blue" }}></i>
          </p>
        </Message>
      )}
      {currentWeathers && Object.keys(currentWeathers).length && (
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
                          key={idx}
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

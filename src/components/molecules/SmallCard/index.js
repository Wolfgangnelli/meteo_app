import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  kelvinToCelsius,
  convertUnixTimestapToDate,
  convertUnixTimestapToTime,
  findCity,
} from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateForecastNotSelected,
  getFiveDaysUpdateForecastData,
} from "../../../redux/actions/forecastAction";
import { ForecastDataContext } from "../../../contexts/forecastscontext";
import "./_smallcard.scss";

const SmallCard = ({
  data = {},
  className = "",
  size = "s",
  direction = "o",
}) => {
  const { main, weather, dt, name } = data;

  const dispatch = useDispatch();

  const currentWeathersData = useSelector((state) => state.currentWeathersData);

  const { currentWeathers } = currentWeathersData;

  const [, setData] = useContext(ForecastDataContext);

  const handleClick = () => {
    let lat, lon;
    switch (name) {
      case "Turin":
        lat = 45.070312;
        lon = 7.6868565;
        break;
      case "London":
        lat = 51.5073219;
        lon = -0.1276474;
        break;
      case "Rome":
        lat = 41.8947;
        lon = 12.4839;
        break;
      default:
        break;
    }
    dispatch(updateForecastNotSelected(data.id));
    setData(findCity(currentWeathers, name));
    dispatch(getFiveDaysUpdateForecastData(lat, lon));
  };

  return (
    <>
      {size === "s" && direction === "o" && (
        <Card className={className} onClick={handleClick} role="button">
          <Row className="p-2 small-card-media-less-xxl">
            <Col>
              <h5 className="small-card-title-h5">{name}</h5>
              <p className="small-card-text">{convertUnixTimestapToDate(dt)}</p>
              <span className="small-card-hour">
                {convertUnixTimestapToTime(dt, name === "London" ? "GB" : "")}
              </span>
            </Col>
            <Col className="small-card-image">
              <Card.Img src={`/svg/${weather[0].icon}.svg`} />
            </Col>
            <Col className="small-card-temperature">
              <p>{kelvinToCelsius(main.temp)}°</p>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default SmallCard;

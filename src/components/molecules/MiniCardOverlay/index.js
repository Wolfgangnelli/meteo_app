import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import { ForecastDataContext } from "../../../contexts/forecastscontext";
import { kelvinToCelsius } from "../../../utils";
import "./_minicardoverlay.scss";

function MiniCardOverlay() {
  const [data] = useContext(ForecastDataContext);

  return (
    <div className="mini-card-overlay">
      {data && (
        <div
          className="ps-1 card-overlay-container"
          style={{ height: 100 + "%" }}
        >
          <div className="card-overlay-temperature">
            <p>{kelvinToCelsius(data.list[0].main.temp)}°</p>
          </div>
          <Image src={`/svg/${data.list[0].weather[0].icon}.svg`} fluid />
        </div>
      )}
    </div>
  );
}

export default MiniCardOverlay;

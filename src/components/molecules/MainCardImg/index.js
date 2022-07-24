import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import image from "../../../assets/images/building_background.png";
import { MiniCardOverlay } from "../index";
import { ForecastDataContext } from "../../../contexts/forecastscontext";
import { convertUnixTimestapToDate } from "../../../utils";
import "./_maincardimg.scss";

function MainCardImg({ className }) {
  const [data] = useContext(ForecastDataContext);

  return (
    <>
      {data && Object.keys(data).length && (
        <Card style={{ borderRadius: 25 + "px" }} className={className}>
          <Card.Img
            src={image}
            style={{ borderRadius: 25 + "px" }}
            className="img-fluid card-img-less-large"
          />
          <Card.ImgOverlay>
            <div className="card-overlay">
              <Card.Title>{data.name}</Card.Title>
              <Card.Text className="card-text-semibold">
                {convertUnixTimestapToDate(data.dt)}
              </Card.Text>
              <Card.Text className="card-text-normal">
                {data.weather[0].main}
              </Card.Text>
            </div>
          </Card.ImgOverlay>
          <MiniCardOverlay />
        </Card>
      )}
    </>
  );
}

export default MainCardImg;
// "https://picsum.photos/2000/1100"

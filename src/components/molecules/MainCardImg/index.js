import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import image from "../../../assets/images/building_background.png";
import { MiniCardOverlay } from "../index";
import { ForecastDataContext } from "../../../contexts/forecastscontext";
import { formattingDate } from "../../../utils";
import "./_maincardimg.scss";

function MainCardImg({
  title = "Turin",
  date = "Friday 18, semptember",
  forecast = "Sunny",
  className,
}) {
  const [data] = useContext(ForecastDataContext);

  useEffect(() => {
    data && console.log(data);
  }, [data]);

  return (
    <>
      {data.list && (
        <Card style={{ borderRadius: 25 + "px" }} className={className}>
          <Card.Img
            src={image}
            style={{ borderRadius: 25 + "px" }}
            className="img-fluid card-img-less-large"
          />
          <Card.ImgOverlay>
            <div className="card-overlay">
              <Card.Title>{data?.city?.name}</Card.Title>
              <Card.Text className="card-text-semibold">
                {formattingDate(data.list[0].dt_txt)}
              </Card.Text>
              <Card.Text className="card-text-normal">
                {data.list[0].weather[0].main}
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

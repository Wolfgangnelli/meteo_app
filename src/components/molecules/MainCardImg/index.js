import React from "react";
import { Card } from "react-bootstrap";
import image from "../../../assets/images/building_background.png";
import { MiniCardOverlay } from "../index";
import "./_maincardimg.scss";

function MainCardImg({
  title = "Turin",
  date = "Friday 18, semptember",
  forecast = "Sunny",
  className,
}) {
  return (
    <Card style={{ borderRadius: 25 + "px" }} className={className}>
      <Card.Img src={image} style={{ borderRadius: 25 + "px" }} />
      <Card.ImgOverlay>
        <div className="card-overlay">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="card-text-semibold">{date}</Card.Text>
          <Card.Text>{forecast}</Card.Text>
        </div>
      </Card.ImgOverlay>
      <MiniCardOverlay />
    </Card>
  );
}

export default MainCardImg;
// "https://picsum.photos/2000/1100"

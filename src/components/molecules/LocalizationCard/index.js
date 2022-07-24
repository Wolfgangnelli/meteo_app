import React from "react";
import { Card } from "react-bootstrap";
import "./_localizzationcard.scss";

const Localization = ({ label = "", title = "" }) => {
  return (
    <div>
      <h5 className="localization-title">{title}</h5>
      <Card className="localization-card-azure">
        <Card.Body className="localization-body">
          <i className="fa-solid fa-location-dot fa-2xl"></i>
          <Card.Text className="localization-label">{label}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Localization;

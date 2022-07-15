import React from "react";
import { Button } from "react-bootstrap";
import "./_sbutton.scss";

function SButton({ icon, label, variant, className }) {
  return (
    <Button variant={variant} className={className}>
      {icon && icon} <span className="ps-1">{label}</span>
    </Button>
  );
}

export default SButton;

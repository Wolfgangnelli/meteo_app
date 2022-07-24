import React from "react";
import { Main } from "../../components/organisms";

const Homepage = ({ children, className }) => {
  return <Main className={className}>{children}</Main>;
};

export default Homepage;

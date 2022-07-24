import React, { useState, createContext } from "react";

const ForecastDataContext = createContext({});

const ForecastsDataProvider = (props) => {
  const [data, setData] = useState({});
  return (
    <ForecastDataContext.Provider value={[data, setData]}>
      {props.children}
    </ForecastDataContext.Provider>
  );
};

export { ForecastsDataProvider, ForecastDataContext };

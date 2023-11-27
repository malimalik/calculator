import Header from "./components/Header";
import React, { useState, Fragment } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: +e.target.value,
      };
    });
  };
  return (
    <Fragment>
      <Header />
      <UserInput handleChange={handleChange} />
      <Results data={data} />
    </Fragment>
  );
}

export default App;

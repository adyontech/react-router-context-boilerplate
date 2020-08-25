import React, { useContext } from "react";
import { mainContext } from "../context/mainContext";

function Home() {
  const val = useContext(mainContext);
  console.log(val);
  return <div className="homeComp">hey</div>;
}

export default Home;

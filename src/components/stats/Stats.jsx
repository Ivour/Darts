import React from "react";
import styles from "./Stats.module.css";
import StatsTable from "./StatsTable";
import Navbar from "../layout/Navbar";

const Stats = () => {
  return (
    <>
      <Navbar isStats={true} />
      <StatsTable />
      <StatsTable />
    </>
  );
};

export default Stats;

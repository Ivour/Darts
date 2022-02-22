import React from "react";
import styles from "./StatsTable.module.css";
import { Typography } from "@mui/material";
import Card from "./Card";
import StatsPlayerData from "./StatsPlayerData";

const StatsTable = () => {
  return (
    <section className={styles.table}>
      <Typography variant="h6" className={styles["table__title"]}>
        Games
      </Typography>
      <Typography>Players</Typography>
      <Typography>Games</Typography>
      <Typography>Wins</Typography>
      <Typography>% of wins</Typography>
      <StatsPlayerData />
      <StatsPlayerData />
      <StatsPlayerData />
      <StatsPlayerData />
      <StatsPlayerData />
      <StatsPlayerData />
      <StatsPlayerData />
    </section>
  );
};

export default StatsTable;

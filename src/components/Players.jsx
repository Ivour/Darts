import { Typography } from "@mui/material";
import React from "react";
import AddPlayer from "./AddPlayer";
import PlayerCheckbox from "./PlayerCheckbox";
import styles from "./Players.module.css";

const Players = () => {
  return (
    <section className={styles.players}>
      <Typography variant="h6">Select players</Typography>
      <PlayerCheckbox user="Ivour" />
      <PlayerCheckbox user="Ivour" />
      <PlayerCheckbox user="Ivour" />
      <AddPlayer />
    </section>
  );
};

export default Players;

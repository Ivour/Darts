import { Typography, Button } from "@mui/material";
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
      <Button
        color="primary"
        variant="outlined"
        size="small"
        sx={{ width: "fit-content" }}
      >
        Add New User
      </Button>
      <AddPlayer />
    </section>
  );
};

export default Players;

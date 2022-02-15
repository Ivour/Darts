import { Typography } from "@mui/material";
import React from "react";
import styles from "./PlayerScore.module.css";
import Chip from "@mui/material/Chip";

const PlayerScore = () => {
  return (
    <section className={`${styles.scores} ${styles["scores--active"]}`}>
      <Typography className={styles["scores__total"]} color="secondary">
        501
      </Typography>
      <Typography className={styles["scores__player"]}>Player One</Typography>
      <div className={styles["scores__partial-scores"]}>
        <Chip
          label={1}
          size="small"
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: "0.6em", minWidth: "2.5em" }}
        ></Chip>
        <Chip
          label={null}
          size="small"
          variant="outlined"
          color="secondary"
          sx={{ margin: "0 0.5em", borderRadius: "0.6em", minWidth: "2.5em" }}
        ></Chip>
        <Chip
          label={2}
          size="small"
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: "0.6em", minWidth: "2.5em" }}
        ></Chip>
      </div>
      <Typography className={styles["scores__sum"]} f>
        123
      </Typography>
      <Typography className={styles["scores__sets"]} fontSize="small">
        sets: 0 legs:1
      </Typography>
      <Typography className={styles["scores__dart-count"]} fontSize="small">
        dart count
      </Typography>
      <Typography className={styles["scores__average"]} fontSize="small">
        avg. 32
      </Typography>
    </section>
  );
};

export default PlayerScore;

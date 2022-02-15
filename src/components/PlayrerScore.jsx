import { Typography } from "@mui/material";
import React from "react";
import styles from "./PlayerScore.module.css";
import Chip from "@mui/material/Chip";

const PlayerScore = () => {
  return (
    <section className={`${styles.scores} ${styles["scores--active"]}`}>
      <Typography className={styles["scores__total"]}>501</Typography>
      <Typography className={styles["scores__player"]}>Player One</Typography>
      <div className={styles["scores__partial-scores"]}>
        <Chip
          label={11}
          size="small"
          variant="outlined"
          sx={{ borderRadius: "0.6em" }}
        ></Chip>
        <Chip
          label={40}
          size="small"
          variant="outlined"
          sx={{ margin: "0 0.5em", borderRadius: "0.6em" }}
        ></Chip>
        <Chip
          label={20}
          size="small"
          variant="outlined"
          sx={{ borderRadius: "0.6em" }}
        ></Chip>
      </div>
      <Typography className={styles["scores__sum"]}>123</Typography>
      <div className={styles["scores__sets"]}>sets,legs</div>
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

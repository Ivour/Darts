import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./PlayerScore.module.css";
import Chip from "@mui/material/Chip";

const PlayerScore = ({ player, scores, turn, isActive }) => {
  const scoreSum = scores.reduce((acc, val) => acc + val, 0);
  const [totalScore, setTotalScore] = useState(50);
  const [totalDarts, setTotalDarts] = useState(0);
  const [legs, setLegs] = useState(0);

  useEffect(() => {
    if (totalScore === 0) {
      setLegs((prevState) => prevState + 1);
      setTotalScore(50);
    }
  }, [totalScore]);

  useEffect(() => {
    if (isActive && turn) {
      setTotalScore((prevState) => prevState - scores[turn - 1]);
      setTotalDarts((prevState) => prevState + 1);
    }
  }, [scores, turn, isActive]);

  return (
    <section
      className={`${styles.scores} ${isActive && styles["scores--active"]}`}
    >
      <Typography className={styles["scores__total"]} color="secondary">
        {totalScore}
      </Typography>
      <Typography className={styles["scores__player"]}>{player}</Typography>
      <div className={styles["scores__partial-scores"]}>
        <Chip
          label={isActive && (scores[0] || null)}
          size="small"
          variant="outlined"
          color="primary"
          sx={{ borderRadius: "0.6em", minWidth: "2.5em" }}
        ></Chip>
        <Chip
          label={isActive && (scores[1] || null)}
          size="small"
          variant="outlined"
          color="primary"
          sx={{ margin: "0 0.5em", borderRadius: "0.6em", minWidth: "2.5em" }}
        ></Chip>
        <Chip
          label={isActive && (scores[2] || null)}
          size="small"
          variant="outlined"
          color="primary"
          sx={{ borderRadius: "0.6em", minWidth: "2.5em" }}
        ></Chip>
      </div>
      <Typography className={styles["scores__sum"]}>
        {isActive && scoreSum}
      </Typography>
      <Typography className={styles["scores__sets"]} fontSize="small">
        sets: 0 legs:{legs}
      </Typography>
      <Typography className={styles["scores__dart-count"]} fontSize="small">
        dart count: {totalDarts}
      </Typography>
      <Typography className={styles["scores__average"]} fontSize="small">
        avg. 32
      </Typography>
    </section>
  );
};

export default PlayerScore;

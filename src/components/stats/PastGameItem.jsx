import { Typography } from "@mui/material";
import React from "react";
import Card from "../layout/Card";
import styles from "./PastGameItem.module.css";

import ItemScores from "./ItemScores";

const PastGameItem = ({ data, count }) => {
  const { date, gameData } = data;
  return (
    <Card>
      <section className={styles.item}>
        <Typography className={styles["item__date"]}>{date}</Typography>
        <Typography className={styles["item__count"]}>Game: {count}</Typography>
        <Typography className={styles["item__sets"]}>Set:</Typography>
        {[1, 2, 3, 4, 5].map((n) => (
          <Typography key={n}>{n}</Typography>
        ))}
        {gameData.map(({ player, legs, isWinner }) => (
          <ItemScores
            player={player}
            legs={legs}
            isWinner={isWinner}
            key={Math.random()}
          />
        ))}
      </section>
    </Card>
  );
};

export default PastGameItem;

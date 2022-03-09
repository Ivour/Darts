import React, { Fragment, useState, useEffect } from "react";
import styles from "./Game.module.css";
import { Button } from "@mui/material";
import PlayerScore from "./PlayrerScore";
import Navbar from "../layout/Navbar";
import { useOptionsContext } from "../../store/OptionsContext";

const scoreNums = Array.from({ length: 21 }, (_, i) => i);
scoreNums.push(...[25, 50]);

const Game = () => {
  const { players } = useOptionsContext();
  const [scores, setScores] = useState([]);
  const [turn, setTurn] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);

  const getValueHandler = (e) => {
    setScores((prevState) => [...prevState, +e.target.id]);
    setTurn((prevState) => prevState + 1);
    console.log(turn, scores);
  };
  /*  const onGetMatchScores = (obj) => {
    const [legs, sets] = obj
    if (legs > 0 || sets > 0) {
      setScores([]); TODO tomorrow!
      setTurn
    }
  } */

  useEffect(() => {
    if (turn === 3) {
      setScores([]);
      setTurn(0);
      if (activePlayer === players.length - 1) {
        setActivePlayer(0);
      } else {
        setActivePlayer((prevState) => prevState + 1);
      }
    }
  }, [turn, activePlayer, players]);

  return (
    <Fragment>
      <Navbar isGame={true} />
      {
        //modal window před ukončením hry, po stisku end game
      }
      <div className={styles.game}>
        {players.map((player, i) => {
          if (activePlayer === i) {
            return (
              <PlayerScore
                isActive={true}
                player={player}
                scores={scores}
                turn={turn}
              />
            );
          } else {
            return (
              <PlayerScore
                isActive={false}
                player={player}
                scores={scores}
                turn={turn}
              />
            );
          }
        })}

        <section className={styles["game__buttons-container"]}>
          {scoreNums.map((n) => (
            <Button
              key={n}
              variant="contained"
              size="small"
              className={styles["game__buttons"]}
              onClick={getValueHandler}
              id={n}
            >
              {n}
            </Button>
          ))}
          {["double", "triple"].map((str, i) => (
            <Button
              key={i}
              variant="contained"
              color="primary"
              className={`${styles["game__buttons"]} ${styles["game__buttons--double"]}`}
            >
              {str}
            </Button>
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Game;

import { Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import PastGameItem from "./PastGameItem";

const dummy_data = [
  {
    date: "27/08/2003",
    gameData: [
      { player: "Ivo", legs: [3, 2, 3, 2, 1], isWinner: false },
      { player: "Ota", legs: [1, 3, 2, 3, 3], isWinner: true },
    ],
  },
  {
    date: "17/08/2004",
    gameData: [
      { player: "Ivour", legs: [3, 2, 3, null, null], isWinner: true },
      { player: "Otak", legs: [1, 3, 2, null, null], isWinner: false },
      { player: "Adam", legs: [1, 3, 2, null, null], isWinner: false },
    ],
  },
  {
    date: "27/11/1999",
    gameData: [
      { player: "Kubao", legs: [3, 2, 3, 2, null], isWinner: false },
      { player: "Adam", legs: [1, 3, 2, 3, null], isWinner: true },
    ],
  },
  {
    date: "27/11/1999",
    gameData: [
      { player: "Kubao", legs: [3, 2, 3, 2, null], isWinner: false },
      { player: "Adam", legs: [1, 3, 2, 3, null], isWinner: true },
    ],
  },
  {
    date: "27/11/1999",
    gameData: [
      { player: "Kubao", legs: [3, 2, 3, 2, null], isWinner: false },
      { player: "Adam", legs: [1, 3, 2, 3, null], isWinner: true },
    ],
  },
  {
    date: "27/11/1999",
    gameData: [
      { player: "Kubao", legs: [3, 2, 3, 2, null], isWinner: false },
      { player: "Adam", legs: [1, 3, 2, 3, null], isWinner: true },
    ],
  },
];

const PastGames = () => {
  return (
    <>
      <Navbar isGame={true} />
      {dummy_data.map((obj, i) => (
        <PastGameItem data={obj} count={i + 1} key={i} />
      ))}
    </>
  );
};

export default PastGames;

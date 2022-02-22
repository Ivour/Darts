import React from "react";
import { Typography, Chip } from "@mui/material";

const ItemScores = ({ player, legs, isWinner }) => {
  return (
    <>
      <Typography sx={isWinner ? { color: "#fa9f37" } : null}>
        {player}
      </Typography>
      {legs.map((n) => {
        return (
          <Chip
            label={n}
            variant={"outlined"}
            color={n === 3 ? "primary" : "default"}
            size="small"
            key={Math.random()}
            sx={{
              margin: "0.2em",
              borderRadius: "0.6em",
              width: "26px",
            }}
          />
        );
      })}
    </>
  );
};

export default ItemScores;

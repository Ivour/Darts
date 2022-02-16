import { TextField } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { InputAdornment } from "@mui/material";
import styles from "./AddPlayer.module.css";

const AddPlayer = () => {
  return (
    <div className={styles["add-player"]}>
      <TextField
        id="outlined-basic"
        label="Add new user"
        color="primary"
        variant="outlined"
        focused={true}
        size="small"
        sx={{ input: { color: "white" } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CheckCircleOutlineIcon size="small" color="success" />
              <HighlightOffIcon size="small" color="error" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default AddPlayer;

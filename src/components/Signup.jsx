import React, { useRef, useState } from "react";
import Card from "./Card";
import styles from "./Signup.module.css";
import { Button, TextField } from "@mui/material";

const Signup = () => {
  const [passHasError, setPassHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass !== passAgain) {
      setPassHasError(true);
      return;
    }
    setPassHasError(false);
    console.log(user, email, pass);
  };

  return (
    <Card>
      <form className={styles["sign-up"]} onSubmit={submitHandler}>
        <h3 className={styles["sign-up__title"]}>Sign Up</h3>

        <TextField
          label="Email"
          autoComplete="off"
          variant="outlined"
          size="small"
          color="warning"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          label="Username"
          variant="outlined"
          autoComplete="off"
          size="small"
          color="warning"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          sx={{ margin: "0.5em" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          size="small"
          color="warning"
          sx={{ marginBottom: "0.5em" }}
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        <TextField
          error={passHasError}
          label={passHasError ? "passwords are not same" : "repeat password"}
          variant="outlined"
          type="password"
          size="small"
          color="warning"
          onChange={(e) => setPassAgain(e.target.value)}
          value={passAgain}
        />
        <Button
          type="submit"
          size="small"
          sx={{ margin: "1em" }}
          variant="outlined"
        >
          Sign Up
        </Button>
      </form>
    </Card>
  );
};

export default Signup;

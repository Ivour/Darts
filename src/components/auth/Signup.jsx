import React, { useRef, useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Card from "../layout/Card";
import styles from "./Signup.module.css";
import { Button, TextField } from "@mui/material";
import { useAuthContext } from "../../store/AuthContext";

const Signup = () => {
  const [passHasError, setPassHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const { signUp, user } = useAuthContext();

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass !== passAgain) {
      setPassHasError(true);
      return;
    } else {
      signUp(email, pass);
    }
    setPassHasError(false);
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
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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

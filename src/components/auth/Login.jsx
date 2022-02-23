import React, { useRef, useState } from "react";
import { Typography } from "@mui/material";
import Card from "../layout/Card";
import styles from "./Signup.module.css";
import { Button, TextField } from "@mui/material";
import { useAuthContext } from "../../store/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const authCtx = useAuthContext();

  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.logIn(email, pass);
  };

  return (
    <Card>
      <form className={styles["sign-up"]} onSubmit={submitHandler}>
        <h3 className={styles["sign-up__title"]}>Log in </h3>

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
          label="Password"
          variant="outlined"
          type="password"
          size="small"
          color="warning"
          sx={{ margin: "0.5em" }}
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />

        <Button
          type="submit"
          size="small"
          sx={{ margin: "1em" }}
          variant="outlined"
        >
          Log in
        </Button>
      </form>
    </Card>
  );
};

export default Login;

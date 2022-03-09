import React, { useRef, useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Card from "../layout/Card";
import styles from "./Signup.module.css";
import { Button, TextField, Alert } from "@mui/material";
import { useAuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

const Signup = () => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("test1@test.cz");
  const [username, setUsername] = useState("Test");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const { signUp, user, addUsername } = useAuthContext();
  const navigate = useNavigate();
  const db = getDatabase();

  const submitHandler = async (e) => {
    e.preventDefault();
    setHasError(false);

    if (pass !== passAgain) {
      setHasError("passwords are not same");
      return;
    }

    try {
      const res = await signUp(email, pass);

      if (username) await addUsername(username);
      set(ref(db, `users/${res.user.uid}`), { username });

      navigate("options");
    } catch (err) {
      setHasError(err.message);
    }

    /* if (pass !== passAgain) {
      setPassHasError(true);
      return;
    } else {
      signUp(email, pass);
    }
    setPassHasError(false); */
  };

  return (
    <Card>
      <form className={styles["sign-up"]} onSubmit={submitHandler}>
        <h3 className={styles["sign-up__title"]}>Sign Up</h3>
        {hasError && (
          <Alert
            variant="outlined"
            severity="error"
            sx={{ marginBottom: "1em", borderRadius: "0.6em", maxWidth: "90%" }}
          >
            {hasError}
          </Alert>
        )}

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
          label="Username - optional"
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
          label="Repeat password"
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

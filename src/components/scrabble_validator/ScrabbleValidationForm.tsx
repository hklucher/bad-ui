import React, { ChangeEvent } from "react";
import { Card, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./ScrabbleValidationForm.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  card: {
    minWidth: "30%",
    backgroundColor: "white",
    padding: "24px",
  },

  input: {
    width: "100%",
    marginTop: "8px",
    marginBottom: "18px",
  },
});

function ScrabbleValidationForm() {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="container">
      <Card variant="outlined" className={classes.card}>
        <Typography variant="h6">
          Sign Up
        </Typography>

        <form className={classes.root}>
          <TextField
            className={classes.input}
            label="Email"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />

          <TextField
            className={classes.input}
            label="Password"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            type="password"
          />
        </form>
      </Card>
    </div>
  );
}

export default ScrabbleValidationForm;

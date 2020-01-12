import React, { ChangeEvent } from "react";
import { Card, Typography, TextField, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./ScrabbleValidationForm.css";
import * as ScrabbleUtils from "../../utils/scrabbleUtils";
import ScrabbleValidatorSubmit from "./ScrabbleValidatorSubmit";

const MIN_SCRABBLE_SCORE = 24;

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

  submitButton: {
    marginTop: "14px",
  },
});

function ScrabbleValidationForm() {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string[] }>({
    password: [],
  });

  const clearErrors = () => setErrors({ password: [] });

  const validateForm = () => {
    clearErrors();

    if (ScrabbleUtils.getScrabbleScore(password) < MIN_SCRABBLE_SCORE) {
      setErrors({
        ...errors,
        password: [
          `Your password must be at least ${MIN_SCRABBLE_SCORE} points or higher according to the rules of Scrabble.`,
        ],
      });
    } else {
      setSubmitSuccess(true);
    }
  };

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

          <FormControl error={errors.password.length > 0}>
            <InputLabel htmlFor="component-error">Password</InputLabel>

            <Input
              className={classes.input}
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              type="password"
            />

            <FormHelperText id="component-error-text">
              {errors.password.join(", ")}
            </FormHelperText>
          </FormControl>
        </form>

        <ScrabbleValidatorSubmit
          disabled={email.length === 0 || password.length === 0}
          onSubmit={validateForm}
          succeeded={submitSuccess}
        />
      </Card>
    </div>
  );
}

export default ScrabbleValidationForm;

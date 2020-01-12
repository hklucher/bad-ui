import React from "react";
import { Button } from "@material-ui/core";

import "./ScrabbleValidatorSubmit.css";

interface Props {
  onSubmit: () => void;
  disabled?: boolean
  succeeded?: boolean
}

function ScrabbleValidatorSubmit({
  onSubmit,
  disabled = false,
  succeeded = false
}: Props) {

  const renderContent = () => {
    if (succeeded) {
      return <p>Thanks for signing up!</p>
    }

    return (
      <Button
        disabled={disabled}
        onClick={onSubmit}
        variant="contained"
      >
        Submit
      </Button>
    )
  }

  return (
    <div className="submit-container">
      {renderContent()}
    </div>
  );
}

export default ScrabbleValidatorSubmit;

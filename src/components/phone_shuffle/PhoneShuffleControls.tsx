import React from "react";
import { Button } from "@material-ui/core";

import "./PhoneShuffleControls.css";

interface Props {
  onStart: () => void
} 

function PhoneShuffleControls({ onStart }: Props) {
  return (
    <div className="phone-shuffle-controls">
      <Button color="primary" onClick={onStart}>
        Start
      </Button>
    </div>
  )
}

export default PhoneShuffleControls

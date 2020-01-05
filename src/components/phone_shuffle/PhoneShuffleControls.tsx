import React from "react";
import { Button } from "@material-ui/core";

import "./PhoneShuffleControls.css";
import { ShufflingStatus } from "./PhoneShuffle";

interface Props {
  onStart: () => void
  onStop: () => void
  status: ShufflingStatus
} 

function PhoneShuffleControls({ onStart, status, onStop }: Props) {
  const handleClick = () => {
    if (status === ShufflingStatus.Running) {
      onStop()
    } else {
      onStart()
    }
  }

  return (
    <div className="phone-shuffle-controls">
      <Button color="primary" onClick={handleClick}>
        {status === ShufflingStatus.Running ? "Stop" : "Start"}
      </Button>
    </div>
  )
}

export default PhoneShuffleControls

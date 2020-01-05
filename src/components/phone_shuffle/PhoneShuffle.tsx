import React, { useState } from "react";
import { Card } from "@material-ui/core";

import "./PhoneShuffle.css";
import PhoneShuffleControls from "./PhoneShuffleControls";
import PhoneShuffleForm from "./PhoneShuffleForm";

function PhoneShuffle() {
  const [phoneNumberDigits, setPhoneNumberDigits] = useState({
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
  })

  const [shuffleIndex, setShuffleIndex] = React.useState(0)

  const shuffle = () => {
    setPhoneNumberDigits({
      ...phoneNumberDigits,
      [shuffleIndex]: 1,
    })
  }

  return (
    <div className="container">
      <Card variant="outlined" className="phone-shuffle__card">
        <PhoneShuffleForm
          phoneNumberDigits={phoneNumberDigits}
        />

        <PhoneShuffleControls
          onStart={shuffle}
        />
      </Card>
    </div>
  )
}

export default PhoneShuffle;

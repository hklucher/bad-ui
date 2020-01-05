import React, { useEffect } from "react";
import { Card, Typography } from "@material-ui/core";

import "./PhoneShuffle.css";
import PhoneNumberSummary from "./PhoneNumberSummary";
import PhoneShuffleControls from "./PhoneShuffleControls";
import PhoneShuffleForm from "./PhoneShuffleForm";
import { getNextDigit } from "../../utils/phoneShuffleUtils";

export enum ShufflingStatus {
  Running = "Running",
  Stopped = "Stopped"
}

const MAX_DIGITS_INDEX = 9

function PhoneShuffle() {
  const intervalId = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const [shufflingStatus, setShufflingStatus] = React.useState<ShufflingStatus>(
    ShufflingStatus.Stopped
  );

  const [shuffleIndex, setShuffleIndex] = React.useState(0);
  const [shuffleDigit, setShuffleDigit] = React.useState<number | null>(null);

  const [phoneNumberDigits, setPhoneNumberDigits] = React.useState<{
    [key: string]: null | number;
  }>({
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null
  });

  const shuffle = () => {
    const nextDigit = getNextDigit(shuffleDigit);

    setShuffleDigit(nextDigit);
  };

  const startShuffle = () => {
    setShufflingStatus(ShufflingStatus.Running);
  };

  const stopShuffle = () => {
    setShufflingStatus(ShufflingStatus.Stopped);
  };

  useEffect(() => {
    if (shufflingStatus === ShufflingStatus.Running) {
      intervalId.current = setInterval(() => {
        shuffle();
      }, 100);

      return () => {
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
      };
    } else if (
      shufflingStatus === ShufflingStatus.Stopped &&
      intervalId.current
    ) {
      setPhoneNumberDigits({
        ...phoneNumberDigits,
        [shuffleIndex]: shuffleDigit,
      })

      if (shuffleDigit !== null && shuffleIndex < MAX_DIGITS_INDEX) {
        setShuffleIndex(shuffleIndex + 1)
        setShuffleDigit(null)
      }

      clearInterval(intervalId.current);
    }
  }, [shufflingStatus, shuffleDigit]);


  return (
    <div className="container">
      <Card variant="outlined" className="phone-shuffle__card">
        <Typography variant="h6">
          Please add your phone number
        </Typography>

        <PhoneNumberSummary
          digits={Object.values(phoneNumberDigits)}
        />

        <PhoneShuffleForm
          phoneNumberDigits={phoneNumberDigits}
          shuffleDigit={shuffleDigit}
          shuffleIndex={shuffleIndex}
        />

        <PhoneShuffleControls
          onStart={startShuffle}
          onStop={stopShuffle}
          status={shufflingStatus}
        />
      </Card>
    </div>
  );
}

export default PhoneShuffle;

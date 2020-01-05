import React from "react";
import PhoneShuffleInput from "./PhoneShuffleInput";

import "./PhoneShuffleForm.css";

interface Props {
  phoneNumberDigits: { [key: string]: null | number };
  shuffleDigit: number | null;
  shuffleIndex: number;
}

function PhoneShuffleForm({
  phoneNumberDigits,
  shuffleDigit,
  shuffleIndex
}: Props) {
  return (
    <div className="input-form">
      {Object.keys(phoneNumberDigits).map((index: string) => {
        return (
          <PhoneShuffleInput
            active={index === shuffleIndex.toString()}
            key={index}
            value={index === shuffleIndex.toString() ? shuffleDigit : phoneNumberDigits[index]}
          />
        );
      })}
    </div>
  );
}

export default PhoneShuffleForm;

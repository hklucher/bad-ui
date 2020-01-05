import React from "react";

import "./PhoneShuffleInput.css";

interface Props {
  active: boolean;
  value: number | null;
}

function PhoneShuffleInput({ active, value }: Props) {
  const isComplete = value !== null && !active;

  return (
    <div
      className={`phone-shuffle-input ${active &&
        "phone-shuffle-input__active"} ${isComplete &&
        "phone-shuffle-input__complete"}`}
    >
      {value && <p className="phone-shuffle-input__value">{value}</p>}
    </div>
  );
}

export default PhoneShuffleInput;

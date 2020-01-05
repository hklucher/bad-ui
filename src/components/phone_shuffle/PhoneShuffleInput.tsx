import React from "react";

import "./PhoneShuffleInput.css";

interface Props {
  value: number | null
}

function PhoneShuffleInput({ value }: Props) {
  return (
    <div className="phone-shuffle-input">
      {value && <p className="phone-shuffle-input__value">{value}</p>}
    </div>
  )
}

export default PhoneShuffleInput;

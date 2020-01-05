import React from "react";

import "./PhoneShuffleInput.css";

interface Props {
  active: boolean
  value: number | null
}

function PhoneShuffleInput({ active, value }: Props) {
  return (
    <div className={`phone-shuffle-input ${active && "phone-shuffle-input__active"}`}>
      {value && <p className="phone-shuffle-input__value">{value}</p>}
    </div>
  )
}

export default PhoneShuffleInput;

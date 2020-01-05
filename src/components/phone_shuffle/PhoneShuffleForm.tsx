import React from "react";
import PhoneShuffleInput from "./PhoneShuffleInput";

import "./PhoneShuffleForm.css";

interface Props {
  phoneNumberDigits: { [key: string]: null | number }
} 

function PhoneShuffleForm({ phoneNumberDigits }: Props) {
  return (
    <div className="input-form">
      {Object.keys(phoneNumberDigits).map((index: string) => {
        return <PhoneShuffleInput key={index} value={phoneNumberDigits[index]} />
      })}
    </div>
  )
}

export default PhoneShuffleForm;

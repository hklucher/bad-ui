import React from "react";
import { parsePhoneNumberFromDigits } from "../../utils/phoneShuffleUtils";

interface Props {
  digits: Array<number | null>;
}

function PhoneNumberSummary({ digits }: Props) {
  return (
    <div className="phone-number-summary">
      <p>
        Your phone number:
        <b>{` ${parsePhoneNumberFromDigits(digits)}`}</b>
      </p>
    </div>
  );
}

export default PhoneNumberSummary;

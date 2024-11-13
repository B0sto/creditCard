import React from "react";
import InputField from "../../atoms/InputField/InputField";
import Label from "../../atoms/Label/Label";
import '../../App.css'

const ExpiryCVCFields = () => (
  <div className="expiry-cvc-fields">
    <div>
      <Label>Exp. Date (MM/YY)</Label>
      <div className="expiry-inputs">
        <InputField placeholder="MM" />
        <InputField placeholder="YY" />
      </div>
    </div>
    <div>
      <Label>CVC</Label>
      <InputField placeholder="e.g. 123" />
    </div>
  </div>
);

export default ExpiryCVCFields;

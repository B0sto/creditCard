import React from "react";
import InputField from '../../atoms/InputField/InputField'
import Label from '../../atoms/Label/Label'
import ExpiryCVCFields from '../../moleculs/ExpiryCVCFields/ExpiryCVCFields'
import Button from "../../atoms/Button/Button";
import '../../App.css'

const Form = () => (
  <form className="credit-card-form">
    <div className="form-field">
      <Label>Cardholder Name</Label>
      <InputField placeholder="e.g. Jane Appleseed" />
    </div>
    <div className="form-field">
      <Label>Card Number</Label>
      <InputField placeholder="e.g. 1234 5678 9123 0000" />
    </div>
    <ExpiryCVCFields />
    <Button>Confirm</Button>
  </form>
);

export default Form;

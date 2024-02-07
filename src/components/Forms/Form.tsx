import React, { FormEventHandler } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { IButton, IInput } from "../../models/IForm";

interface Props {
  submit: FormEventHandler<HTMLFormElement>;
  inputs: IInput[];
  button: IButton;
}

const Form: React.FC<Props> = ({ submit, inputs, button }) => {
  return (
    <form onSubmit={submit}>
      <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
        {inputs.map((myInput, index) => (
          <div className="relative" key={index}>
            <Input
              type={myInput.type}
              name={myInput.name}
              value={myInput.value}
              onChange={myInput.onChange}
              placeholder={myInput.placeholder}
            />
            <Label labelName={myInput.label} />
          </div>
        ))}
        <div className="relative">
          <Button type={button.type} name={button.name} />
        </div>
      </div>
    </form>
  );
};

export default Form;

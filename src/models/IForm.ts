export interface IInput {
  type: string;
  name: string;
  value?: string | undefined;
  onChange: Function;
  placeholder: string;
  label: string;
  accept?: string;
}

export interface IButton {
  name: string;
  type: "submit" | "button" | "reset" | undefined;
}

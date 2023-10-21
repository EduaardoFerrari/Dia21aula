import { ButtonHTMLAttributes } from "react";
import "./style.css";

interface ButtonSubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function ButtonSubmit = (props: ButtonSubmitProps) => {
  return (
    <button id="button-submit" type="submit" {...props}>
      {props.name}
    </button>
  );
};

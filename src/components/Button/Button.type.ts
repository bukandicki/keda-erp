import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  variant?: "primary" | "outline";
  width?: number,
}

import { IButtonProps } from "./Button.type";

import "./Button.styles.scss"

export default function ButtonComponent({ className, children, ...props }: IButtonProps) {
  return (
    <button className={`button ${className}`} {...props}>{children}</button>
  )
}

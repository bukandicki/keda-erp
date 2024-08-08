import { IButtonProps } from "./Button.type";

import "./Button.styles.scss"

export default function ButtonComponent({ className, children, outlined, ...props }: IButtonProps) {
  const BUTTON_STYLE = () => {
    if (outlined) return "button--outlined"
    else return ""
  }

  return (
    <button
      className={`button ${BUTTON_STYLE()} ${className}`} {...props}
    >
      {children}
    </button>
  )
}

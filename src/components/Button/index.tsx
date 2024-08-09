import { IButtonProps } from "./Button.type";

import "./Button.styles.scss"

export default function ButtonComponent({ className, width, children, outlined, ...props }: IButtonProps) {
  const BUTTON_STYLE = () => {
    if (outlined) return "button--outlined"
    else return ""
  }

  return (
    <button
      className={`button ${BUTTON_STYLE()} ${className}`} style={{ width: `${width}px` }} {...props}
    >
      {children}
    </button>
  )
}

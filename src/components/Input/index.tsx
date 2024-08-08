
import { IInputProps } from "./Input.type"

import "./Input.styles.scss"

export default function InputComponent({ id, label, className, ...props }: IInputProps) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">{label}</label>
      <input type="text" className={`input__field ${className}`} id={id} {...props} />
    </div>
  )
}

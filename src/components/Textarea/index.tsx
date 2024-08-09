
import { ITextareaProps } from "./Textarea.type"

import "./Textarea.styles.scss"

export default function TextareaComponent({ id, label, className, ...props }: ITextareaProps) {
  return (
    <div className="textarea">
      <label htmlFor={id} className="textarea__label">{label}</label>
      <textarea className={`textarea__field ${className}`} id={id} {...props} />
    </div>
  )
}

import React from "react"
import {TEXTBOX} from "../../type/index"
import {Wrapper, Component, Button, ButtonType} from "./style"

type Props = {
  placeholder: string
  refs: React.MutableRefObject<null>
  onChange?: ()=>void
  style?: any
  types?: typeof TEXTBOX
  btn?: ButtonType
}

const TextBox = (props: Props) => {
  return (
    <Wrapper style={props.style}>
      <Component type={props.types} ref={props.refs} onChange={props.onChange} placeholder={props.placeholder}/>
      {
        props.btn ? <Button onClick={props.btn.onClick}>{props.btn.text}</Button> : <></>
      }
    </Wrapper>
  )
}

export default TextBox

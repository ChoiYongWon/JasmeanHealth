import React from "react"
import {TEXTBOX} from "../../type/index"
import {Wrapper, Component} from "./style"

type Props = {
  placeholder: string
  ref: React.MutableRefObject<null>
  onChange?: ()=>void
  style?: any
  types?: typeof TEXTBOX
}

const TextBox = (props: Props) => {
  return (
    <Wrapper style={props.style}>
      <Component type={props.types} ref={props.ref} onChange={props.onChange} placeholder={props.placeholder}/>
    </Wrapper>
  )
}

export default TextBox

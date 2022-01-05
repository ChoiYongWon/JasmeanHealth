import React from "react"
import {BUTTON} from "../../type/index"
import {Wrapper, Component} from "./style"


type Props = {
  text: string
  types: BUTTON
  onClick: ()=>void
  style?: any
}

const Button = (props: Props) => {
  return (
    <Wrapper style={props.style}>
      <Component types={props.types} onClick={props.onClick}>{props.text}</Component>
    </Wrapper>
  )
}

export default Button

import React from "react"
import {Wrapper, Component} from "./style"

type Props = {
  children: any
  style: any
}

const Title = (props: Props) => {
  return (
    <Wrapper style={props.style}>
      <Component>{props.children}</Component>
    </Wrapper>
  )
}

export default Title

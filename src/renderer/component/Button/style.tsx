import styled from "styled-components"
import {BUTTON} from "../../type/index"

type ComponentProps = {
  types: BUTTON
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 345px;
  height: 48px;
`

export const Component = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props:ComponentProps)=>props.types==BUTTON.OUTLINE ? '#ffffff' : '#4285f4'};
  color: ${(props:ComponentProps)=>props.types==BUTTON.OUTLINE ? '#4285f4' : '#ffffff'};
  border: 2px solid #4285f4;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 18px;
  line-height: 20px;
  font-family: Noto Sans KR;
  padding: 14px 26px;
  cursor: pointer;
`

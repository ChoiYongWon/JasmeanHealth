import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 345px;
  height: 48px;
  position: relative;
`

export const Component = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid #4285f4;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 18px;
  line-height: 20px;
  font-family: Noto Sans KR;
  padding: 14px 26px;
`

export type ButtonType = {
  text: string
  onClick: ()=>void
}

export const Button = styled.div`
  position: absolute;
  font-size: 1.125rem;
  border: none;
  font-weight: bold;
  font-family: Noto Sans KR;
  color: #699BF7;
  top: 14px;
  right: 20px;
  background: transparent;
  cursor: pointer;
`

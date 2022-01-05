import styled from "styled-components"
import {Link} from "react-router-dom"

export const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const TextWrapper = styled.div`
`

export const Text = styled.span`
  font-size: 18px;
  color: black;
  font-family: Noto Sans KR;
`

export const LinkButton = styled(Link)`
  color: #4285F4;
  text-decoration: none;
  margin-left: 0.25rem;
  font-size: 18px;
`

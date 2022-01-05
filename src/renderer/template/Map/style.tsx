import styled from "styled-components"


export const Wrapper = styled.div`
  padding: 55px 15px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
  box-sizing: border-box;
`

export const HeaderMessage = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: black;
  line-height: 35px;
  word-break: keep-all;
`

export const Decorate = styled(HeaderMessage)`
  color: #699BF7;
`

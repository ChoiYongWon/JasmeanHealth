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

export const IframeWrapper = styled.div`
  width: 100%;
  height: 420px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

`

export const MapWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% + 100px);
  top: -100px;
  overflow: hidden;

`

export const MapComponent = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
`

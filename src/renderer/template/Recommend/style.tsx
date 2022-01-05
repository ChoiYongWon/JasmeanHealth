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

export const ResultMessage = styled.span`
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  word-break: keep-all;
  letter-spacing: -0.5px;
  width: 100%;
  text-align:center;
`

export const RecordButton = styled.img`
  width: 106px;
  height: 106px;
  fill: #699BF7;
  margin: 0 auto;
  cursor: pointer;
  transition: transform .2s ease;

  &:hover{
    transform: scale(1.05);
  }
`

export const Decorate = styled(ResultMessage)`
  color: #699BF7;
  font-weight: bold;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  fill: #699BF7;
  cursor: pointer;
  transition: transform .2s ease;

  &:hover{
    transform: scale(1.05);
  }
`

export const IconTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #699BF7;
`


import styled, { keyframes, css } from "styled-components"

const recording = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`


export const Wrapper = styled.div`
  padding: 55px 31px;
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
`

export const RecordDescription = styled.span`
  font-size: 24px;
  line-height: 20px;
  color: #699BF7;
  letter-spacing: -0.5px;
  width: 100%;
  text-align:center;
`

type RecordProps = {
  recording: boolean
}

export const RecordButton = styled.img`
  width: 106px;
  height: 106px;
  fill: #699BF7;
  margin: 0 auto;
  cursor: pointer;
  transition: transform .2s ease;
  ${(props: RecordProps) => props.recording &&css`
   animation: ${recording} 1.5s 1s infinite linear alternate;
  `}


  &:hover{
    transform: scale(1.05);
  }
`

export const RecordTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin: 0 auto;
  color: #699BF7;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
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


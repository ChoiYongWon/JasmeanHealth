import styled from "styled-components"
import SplashIcon from "../../../assets/splash.svg"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Icon = styled.img`
  width: 128px;
  height: 128px;
`

const Title = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #57A4FF;
`

const Description = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #5D5C5D;

`

const Splash = () => {
  return (
    <Wrapper>
      <Icon src={SplashIcon} style={{marginBottom: "26px"}}></Icon>
      <Title style={{marginBottom: "156px"}}>원클릭 접수 시스템</Title>
      <Description>Powered By<br></br>Jasmean HealthCare</Description>
    </Wrapper>
  )
}

export default Splash

import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  font-family: Noto Sans KR;
  word-break: keep-all;
  flex-direction: column;
`

const HomeLink = styled(Link)`
  color: #4285f4;
  text-decoration: none;
`

const Page403 = () => {
  return (
    <Wrapper>
      잘못된 접근입니다.
      <HomeLink to={"/"} style={{marginTop: "1rem"}}>홈으로</HomeLink>
    </Wrapper>
  )
}

export default Page403

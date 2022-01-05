import record from '../../../../assets/record.svg'
import qr from '../../../../assets/qr.svg'
import user from '../../../../assets/user.svg'
import {Wrapper, HeaderMessage, RecordButton, RecordDescription, RecordTitle, MenuWrapper, IconWrapper, Icon, IconTitle} from "./style"


type Props = {
  name: string
  onRecordClick: ()=>void
  onQRClick: ()=>void
  onUserClick: ()=>void
}

const HomeTemplate = (props: Props) => {

  return (
    <Wrapper>
      <HeaderMessage>{props.name}님,</HeaderMessage>
      <HeaderMessage>어디가 불편하신가요?</HeaderMessage>
      <RecordDescription style={{marginTop: "132px"}}>눌러서 말씀해보세요!</RecordDescription>
      <RecordButton onClick={props.onRecordClick} src={record} alt={"icon"} style={{marginTop: "27px"}}/>
      <RecordTitle style={{marginTop:"27px"}}>원클릭 예약 시스템</RecordTitle>
      <MenuWrapper style={{marginTop: "142px"}}>
        <IconWrapper>
          <Icon onClick={props.onQRClick} src={qr}/>
          <IconTitle style={{marginTop: "7px"}}>QR 코드</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Icon onClick={props.onUserClick} src={user}/>
          <IconTitle style={{marginTop: "7px"}}>정보 수정</IconTitle>
        </IconWrapper>
      </MenuWrapper>
    </Wrapper>
  )
}

export default HomeTemplate

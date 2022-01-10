import {atom} from "recoil"
import { AUTH } from "../type"

export const Auth_Status = atom<AUTH>({
  key: "auth_status",
  default: AUTH.GUEST
})

export const User_Info = atom<any>({
  key: "user_info",
  default: {
    name: null,
    birth: null,
    gender: null,
    phone: null
  }
})

export const UserTemp_Info = atom<any>({
  key: "usertemp_info",
  default: {
    name: null,
    birth: null,
    gender: null,
    phone: null
  }
})

const HOST_URL = "http://localhost:3000"

export const sendTwilio = (name: string, gender: string, birth: string)=> fetch(`${HOST_URL}/auth/user`, {
  headers: {
    "Content-Type" : "application/json"
  },
  method: "POST",
  body: JSON.stringify({
    name, gender, birth
  })
})

export const confirm = (name: string, gender: string, birth: string, authCode: number) => fetch(`${HOST_URL}/auth/confirm`, {
  headers: {
    "Content-Type" : "application/json"
  },
  method: "POST",
  body: JSON.stringify({
    name, gender, birth, authCode
  })
})

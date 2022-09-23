// import axios, { Axios } from 'axios'
// import ls from 'localstorage-slim'
// import encUTF8 from 'crypto-js/enc-utf8'
// import AES from 'crypto-js/aes'
// import authHeader from '../security/authHeader'

import { type } from 'os'

const BASE_URL_API = process.env.REACT_APP_WEB_BFF_URL + '/web-bff'

// const key = '25'
// ls.config.secret = 'new-value'
// ls.config.encrypter = (data, secret) =>
//   AES.encrypt(JSON.stringify(data), secret).toString()
// ls.config.decrypter = (data, secret) => {
//   try {
//     return JSON.parse(AES.decrypt(data, secret).toString(encUTF8))
//   } catch (e) {
//     return data
//   }
// }
type login = {
  login_id: string
  password: string
}
class BackendService {
  login(loginData: login) {
    // return axios.post(`${BASE_URL_API}/login`, loginData, {
    //   withCredentials: true,
    // })

    return loginData
  }

  //   async refreshTokenRotation() {
  //     const refreshToken = {
  //       refresh_token: cookie.get('refresh_token'),
  //     }

  //     return axios.post(`${BASE_URL_API}/refresh-access-token`, refreshToken, {
  //       withCredentials: true,
  //     })
  //   }

  //   getLeave() {
  //     return axios.get(`${BASE_URL_API}/leave`)
  //   }

  //   getLeaveCount() {
  //     return axios.get(
  //       `${BASE_URL_API}/leave/count/${
  //         JSON.parse(ls.get('authToken', { decrypt: true, secret: `${key}` }))
  //           .userId
  //       }`,
  //       {
  //         headers: authHeader(),
  //       },
  //     )
  //   }
  //   getLeaveStatusCount() {
  //     return axios.get(
  //       `${BASE_URL_API}/leave/action-count/${
  //         JSON.parse(ls.get('authToken', { decrypt: true, secret: `${key}` }))
  //           .userId
  //       }`,
  //       {
  //         headers: authHeader(),
  //       },
  //     )
  //   }

  //   requestLeave(userData: object) {
  //     return axios.post(`${BASE_URL_API}/leave`, userData, {
  //       headers: authHeader(),
  //     })
  //   }

  //   editLeaveRequest(userData: object) {
  //     return axios.put(`${BASE_URL_API}/leave`, userData)
  //   }
  //   getListOfManager() {
  //     return axios.get(`${BASE_URL_API}/users?role=manager`, {
  //       headers: authHeader(),
  //     })
  //   }

  //   getListOfIssue() {
  //     console.log('sfasf')
  //     return axios.get(
  //       `${BASE_URL_API}/issue?owner-id=${
  //         JSON.parse(ls.get('authToken', { decrypt: true, secret: `${key}` }))
  //           .userId
  //       }`,
  //       {
  //         headers: authHeader(),
  //       },
  //     )
  //   }

  //   createDailyCheckin(data: object) {
  //     return axios.post(`${BASE_URL_API}/daily-check-in`, data, {
  //       headers: authHeader(),
  //     })
  //   }

  //   editDailyCheckin(data: object, id: number) {
  //     return axios.put(`${BASE_URL_API}/daily-check-in/${id}`, data, {
  //       headers: authHeader(),
  //     })
  //   }

  //   dailyCheckinComment(data: object) {
  //     return axios.post(`${BASE_URL_API}/comment/${data.id}`, data, {
  //       headers: authHeader(),
  //     })
  //   }

  //   dailyCheckinStatus() {
  //     return axios.get(
  //       `${BASE_URL_API}/check-in?employee-id=${
  //         JSON.parse(ls.get('authToken', { decrypt: true, secret: `${key}` }))
  //           .userId
  //       }`,
  //       {
  //         headers: authHeader(),
  //       },
  //     )
  //   }

  //   forgotpasswordEmail(email: object) {
  //     return axios.post(`${BASE_URL_API}/send-otp/email/${email.email}`)
  //   }

  //   forgotpasswordOTP(postData: object, cacheId: string) {
  //     console.log(postData)
  //     return axios.post(`${BASE_URL_API}/validate-otp`, postData)
  //   }
  //   resendOtpService() {
  //     return axios.post(
  //       `${BASE_URL_API}/regenerate-otp?cache-id=${JSON.parse(
  //         ls.get('cacheId', { decrypt: true, secret: `${key}` }),
  //       )}`,
  //     )
  //   }

  //   resetpassword(data: object) {
  //     return axios.post(`${BASE_URL_API}/reset-password`, data)
  //   }

  //   logout() {
  //     return axios.post(`${BASE_URL_API}/logout`)
  //   }

  //   resetLeave() {
  //     return axios.put(
  //       `${BASE_URL_API}/leave/reset`,
  //       JSON.parse(ls.get('authToken', { decrypt: true, secret: `${key}` })),
  //       {
  //         headers: authHeader(),
  //       },
  //     )
  //   }
}

// axios.interceptors.request.use(async (req) => {
//   localStorage.setItem('currentLocation', window.location.pathname)
//   return req
// })

// axios.interceptors.response.use(
//   function (response: any) {
//     return response
//   },
//   function (error: any) {
//     const errConfig = error.config
//     const bs = new BackendService()

//     if (error?.response?.data?.details[0] === 'The refresh_token is invalid.') {
//       localStorage.clear()
//       ls.clear()
//       window.location.href = '/'
//       window.location.reload()
//       // bs.logout();
//     } else if (error?.response?.status === 401 && !errConfig._retry) {
//       errConfig._retry = true

//       try {
//         const refreshToken = {
//           refresh_token: cookie.get('refresh_token'),
//         }

//         const rs = axios.post(
//           `${BASE_URL}/authority-web-bff/auth/refresh`,
//           refreshToken,
//           {
//             withCredentials: true,
//           },
//         )
//         ls.set((res) => 'authToken', JSON.stringify(res.data), {
//           encrypt: true,
//           secret: `${key}`,
//         })
//         // localStorage.setItem('authToken', JSON.stringify(rs.data));
//         return errConfig
//       } catch (_error) {
//         console.log('refreshTokenRotation err', _error)
//         localStorage.clear()
//         ls.clear()
//         window.location.href = '/'
//         window.location.reload()
//       }
//     }
//     return Promise.reject(error)
//   },
// )

export default new BackendService()

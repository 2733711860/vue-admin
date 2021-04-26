import request from '@/utils/request'
const baseUrl = 'https://www.fastmock.site/mock/b4c158de373dc18296a691d9a46c256e/api'

// 登录
export function login(data) {
  return request({
    url: `${baseUrl}/user/login`,
    method: 'post',
    data
  })
}

// 根据token获取用户信息
export function getInfo(token) {
  return request({
    url: `${baseUrl}/get/user/info`,
    method: 'get',
    params: { token }
  })
}

// 登出接口
export function logout() {
  return request({
    url: `${baseUrl}/user/logout`,
    method: 'post'
  })
}

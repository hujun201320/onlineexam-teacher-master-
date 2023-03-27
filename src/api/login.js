/*
  与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax'
// const BASE_URL = process.env.BASE_API
const BASE_URL = 'http://localhost:5001'

// 获取胡老师账号密码
export const reqGetTeaHuPsw = (tno) => ajax(BASE_URL + '/user/login1', { tno })
// 校验教师登录
export const reqLogin = ({ peoplename, password }) => ajax(BASE_URL + '/people_exam/login', { peoplename, password }, 'POST')

// 请求退出登录
export const reqLogOut = () => ajax(BASE_URL + '/user/teacherLogOut')

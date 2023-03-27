import ajax from './ajax'
// const BASE_URL = process.env.BASE_API
const BASE_URL = 'http://localhost:5001'

// 获取全部公告信息
export const reqGetNoticesList = () => ajax(BASE_URL + '/examnotice/getNoticesList')
// 获取搜素公告信息
export const reqSearchNoticesList = (noticeContent, username) => ajax(BASE_URL + '/examnotice/search', { noticeContent, username })
// 请求添加公告信息
export const reqInsertNoticeInfo = (temp) => ajax(BASE_URL + '/examnotice/insertNoticeInfo', temp, 'POST')
// 请求更新公告内容
export const reqUpdateNoticeInfo = (temp) => ajax(BASE_URL + '/examnotice/updateNoticeInfo', temp, 'POST')
// 请求删除公告
export const reqDeleteNotice = (_id) => ajax(BASE_URL + '/examnotice/deleteNotice', { _id }, 'POST')

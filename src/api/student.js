import ajax from './ajax'
const BASE_URL = 'http://localhost:5001'

// 获取全部学生信息
export const reqGetStudentsList = () => ajax(BASE_URL + '/people_exam/getStudentsList')
// 请求搜索学生信息
export const reqUpdateStudentInfo = (row) => ajax(BASE_URL + '/people_exam/updateStudentInfo', row, 'POST')
// 请求更新学生登录状态
export const reqSearchStudentsList = (sno, stuName, stuSex) => ajax(BASE_URL + '/searchStudentInfo', { sno, stuName, stuSex })
// 请求添加学生信息
export const reqInsertStudentInfo = (temp) => ajax(BASE_URL + '/insertStudentInfo', temp, 'POST')

// 获取全部成绩信息
export const reqGetScoresList = () => ajax(BASE_URL + '/paper/getPaperScore')
// 请求删除成绩
export const reqDeleteScore = (row) => ajax(BASE_URL + '/paper/deleteScore', row, 'POST')
// 请求搜索成绩信息
export const reqSearchScoresList = (sno, paperId) => ajax(BASE_URL + '/searchScoresList', { sno, paperId })

// 获取全部已发布试卷信息
export const reqGetPapersList = () => ajax(BASE_URL + '/paper/getPapersList')
// 请求获取成绩图标数据
export const reqGetChartData = (paperId) => ajax(BASE_URL + '/paper/getChartData', { paperId })

// 插入批量上传学生信息数据
export const reqInsertStudentInfoList = (studentList) => ajax(BASE_URL + '/people_exam/insertStudentInfoList', { studentList }, 'POST')

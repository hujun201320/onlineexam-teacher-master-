import ajax from './ajax'
// const BASE_URL = process.env.BASE_API
const BASE_URL = 'http://localhost:5001'

// 获取全部公告信息
export const reqGetPapersList = () => ajax(BASE_URL + '/paper/getTeacherPapersList')
// 获取搜素公告信息
export const reqSearchPapersList = (paperName, langId, paperType) => ajax(BASE_URL + '/searchPapersList', { paperName, langId, paperType })
// 请求删除试卷
export const reqDeletePaper = (_id) => ajax(BASE_URL + '/paper/deletePaper', { _id }, 'POST')
// 请求获取选中试卷问题详情
export const reqPaperQueDetailByPaperId = (_id) => ajax(BASE_URL + '/paper/getPaperQueDetailByPaperId', { _id })
// 请求随机组卷，插入试卷数据，即发布试卷
export const reqRandomInsertPaperInfo = (temp, paperType) => ajax(BASE_URL + '/paper/randomInsertPaperInfo', { temp, paperType }, 'POST')
// 请求固定组卷，插入试卷数据，即发布试卷
export const reqFixedInsertPaperInfo = (temp, paperType) => ajax(BASE_URL + '/paper/fixedInsertPaperInfo', { temp, paperType }, 'POST')
// 请求通过langId获取科目下的所有问题
export const reqPaperQueDetailByLangId = (langId) => ajax(BASE_URL + '/bank/getPaperQueDetailByLangId', { langId })

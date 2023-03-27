import ajax from './ajax'
const BASE_URL = 'http://localhost:5001'

// 获取全部单选题信息
export const reqGetSingleList = () => ajax(BASE_URL + '/bank/getSingleList')
// 获取搜素单选题信息
export const reqSearchSingleList = (content, langId, composeFlag, type) => ajax(BASE_URL + '/bank/search', { content, langId, composeFlag, type })
// 删除单选题
export const reqDeleteSingle = (_id) => ajax(BASE_URL + '/bank/deleteSingle', { _id }, 'POST')
// 添加单选题题目
export const reqInsertSingleInfo = (temp) => ajax(BASE_URL + '/bank/insertSingleInfo', temp, 'POST')
// 更新单选题题目
export const reqUpdateSingleInfo = (temp) => ajax(BASE_URL + '/bank/updateSingleInfo', temp, 'POST')
// 添加导入单选题Excel文件
export const reqInsertSingleList = (singleList) => ajax(BASE_URL + '/bank/insertSingleList', { singleList }, 'POST')
// ---------------------------------------------------------------------------------------------------------------
// 获取全部多选题信息
export const reqGetMultipleList = () => ajax(BASE_URL + '/bank/getMultipleList')
// 获取搜素多选题信息
export const reqSearchMultipleList = (content, langId, composeFlag, type) => ajax(BASE_URL + '/bank/search', { content, langId, composeFlag, type })
// 删除多选题
export const reqDeleteMultiple = (_id) => ajax(BASE_URL + '/bank/deleteMultiple', { _id }, 'POST')
// 添加多选题题目
export const reqInsertMultipleInfo = (temp) => ajax(BASE_URL + '/bank/insertMultipleInfo', temp, 'POST')
// 更新多选题题目
export const reqUpdateMultipleInfo = (temp) => ajax(BASE_URL + '/bank/updateMultipleInfo', temp, 'POST')
// 添加导入多选题Excel文件
export const reqInsertMultipleList = (multipleList) => ajax(BASE_URL + '/bank/insertMultipleList', { multipleList }, 'POST')
// ---------------------------------------------------------------------------------------------------------------
// 获取全部判断题信息
export const reqGetJudgeList = () => ajax(BASE_URL + '/bank/getJudgeList')
// 获取搜素判断题信息
export const reqSearchJudgeList = (content, langId, composeFlag, type) => ajax(BASE_URL + '/bank/search', { content, langId, composeFlag, type })
// 删除判断题
export const reqDeleteJudge = (_id) => ajax(BASE_URL + '/bank/deleteJudge', { _id }, 'POST')
// 添加判断题题目
export const reqInsertJudgeInfo = (temp) => ajax(BASE_URL + '/bank/insertJudgeInfo', temp, 'POST')
// 更新判断题题目
export const reqUpdateJudgeInfo = (temp) => ajax(BASE_URL + '/bank/updateJudgeInfo', temp, 'POST')
// 添加导入判断题Excel文件
export const reqInsertJudgeList = (judgeList) => ajax(BASE_URL + '/bank/insertJudgeList', { judgeList }, 'POST')
// ---------------------------------------------------------------------------------------------------------------
// 获取全部填空题信息
export const reqGetFillList = () => ajax(BASE_URL + '/bank/getFillList')
// 获取搜素填空题信息
export const reqSearchFillList = (content, langId, composeFlag, type) => ajax(BASE_URL + '/bank/search', { content, langId, composeFlag, type })
// 删除填空题
export const reqDeleteFill = (_id) => ajax(BASE_URL + '/bank/deleteFill', { _id }, 'POST')
// 添加填空题题目
export const reqInsertFillInfo = (temp) => ajax(BASE_URL + '/bank/insertFillInfo', temp, 'POST')
// 更新填空题题目
export const reqUpdateFillInfo = (temp) => ajax(BASE_URL + '/bank/updateFillInfo', temp, 'POST')
// 添加导入填空题Excel文件
export const reqInsertFillList = (fillList) => ajax(BASE_URL + '/bank/inserFillList', { fillList }, 'POST')

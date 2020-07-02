import https from '../interface'

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * handle [boolean] 如果需要自己处理 catch 请求 ，传入 true ，交给接口统一处理 ，请传如 false或不传
 */
// 查询车票
export const saveQuery = (data) => {
    return https({
        url: `/station/saveStation`,
        method: 'GET',
        data
		// handle:true
    })
}
// 查询车票
export const getCarList = (data) => {
    return https({
        url: `/bus`,
        method: 'GET',
        data
		// handle:true
    })
}

// 获取所有站点
export const getAllStation = (data) => {
    return https({
        url: `/station/findAllStation`,
        method: 'GET',
        data
		// handle:true
    })
}
// 获取终点站点信息
export const getEndStation = (data) => {
    return https({
        url: `/station/findAllByStationName`,
        method: 'GET',
        data
		// handle:true
    })
}
import https from '@/common/interface.js'

// 查询发货信息
export const findSomeInformation = (data) => {
    return https({
        url: '/inawaybill/findSomeInformation',
        method: 'POST',
				data
    })
}

// 保存信息
export const updateNote = (data) => {
    return https({
        url: '/delivery/updateNote',
        method: 'POST',
				data
    })
}
// 确认发货信息
export const startDelivery = (data) => {
    return https({
        url: '/inawaybill/startDelivery',
        method: 'POST',
				data
    })
}
// 取消发货
export const cancelDelivery = (data) => {
    return https({
        url: '/inawaybill/startDelivery?waybillId=${data.waybillId}',
        method: 'GET'
    })
}
import https from '../interface'

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * handle [boolean] 如果需要自己处理 catch 请求 ，传入 true ，交给接口统一处理 ，请传如 false或不传
 */
// 改签订单
export const reBookOrder = (data) => {
    return https({
        url: `/order/changeOrder`,
        method: 'POST',
        data
		// handle:true
    })
}
// 提交订单
export const postOrder = (data) => {
    return https({
        url: `/order/makeorder`,
        method: 'POST',
        data
		// handle:true
    })
}

// 查询所有订单
export const findAllOrder = (page) => {
  return https({
    url:`/order/findAllOrder?pageNum=${page.pageNum}&pageSize=${page.pageSize}`,
    method: 'post',
    crossDomain: true,
  })
}

// 查询所有已出行订单
export const findToTravel = (page) => {
  return https({
    url:`/order/findToTravel?pageNum=${page.pageNum}&pageSize=${page.pageSize}`,
    method: 'post',
    crossDomain: true,
  })
}

// 查询所有未出行订单
export const findNotToTravel = (page) => {
  return https({
    url:`/order/findNotToTravel?pageNum=${page.pageNum}&pageSize=${page.pageSize}`,
    method: 'post',
    crossDomain: true,
  })
}

// 查询订单详情
export const queryorder = (orderid) => {
  return https({
    url:`/order/queryorder?orderid=${orderid}`,
    method: 'POST',
    crossDomain: true,
  })
}

// 退票
export const returnTicket = (data) => {
  return https({
    url: `/order/returnTicket`,
    method: 'POST',
    data
  })
}

// 取消未支付订单
export const unorder = (data) => {
  return https({
    url: `/order/unorder`,
    method: 'POST',
    data
  })
}

// 订单查询(主要用于获取照片)
export const findOrderForAct = (orderId) => {
  return https({
    url: `/order/findOrderForAct?orderId=${orderId}`,
    method: 'GET'
  })
}
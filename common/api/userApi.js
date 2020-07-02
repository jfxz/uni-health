/* 
*  名称: 用户模块api
*  功能: 与后端的/user/模块的api对接
*  其他: 因为跨域时，每次session都会不同，所以需要加上crossDomain允许跨域
*/
/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * handle [boolean] 如果需要自己处理 catch 请求 ，传入 true ，交给接口统一处理 ，请传如 false或不传
 */

import https from '../interface'

export const loginOrRegister = (data) => {
  return https({
    url: `/user/loginORregister?Name=${data.Name}&TelPhone=${data.TelPhone}&PassWord=${data.PassWord}`,
    method: 'POST',
    // header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    crossDomain: true,
    // success:function(res) {
    //   console.log('这个是res')
    //   console.log(res)
    //       if (res && res.header && res.header['Set-Cookie']) {
    //            uni.setStorageSync('cookieKey', res.header['Set-Cookie']);   //保存Cookie到Storage
    //            console.log('这个是获取到的cookie')
    //            console.log(res.header['Set-Cookie'])
    //       }
    // },
    data
  })
}

// 通过session获取用户信息
export const getSessionUserInfo = _ => {
  // 通过存储在后端的session获取，所以此处不需要参数
  return https({
    url: `/user/getSessionUserInfo`,
    method: 'POST',
    crossDomain: true,
  })
}

// 获取联系人列表(通过session辨认用户)
export const getContactsList = _ => {
  return https({
    method: 'post',
    url: `/user/getContactsList`,
    crossDomain: true,
  })
}

// 添加联系人（通过session辨认用户)
export const addContacts = (data) => {
  return https({
    method: 'post',
    url: `/user/addContacts?Name=${data.name}&Phone=${data.phone}&IdCard=${data.idCard}&TicketType=${data.ticketType}`,
    crossDomain: true,
  })
}

// 修改联系人（通过session辨认用户）
export const updateContacts = (data) => {
  return https({
    method: 'post',
    url:`/user/updateContacts?AutoId=${data.autoId}&Name=${data.name}&Phone=${data.phone}&TicketType=${data.ticketType}`,
    crossDomain: true,
  })
}

// 删除批量联系人（通过session辨认用户）
export const deleteContacts = (data) => {
  return https({
    method: 'post',
    url:`/user/checkedDeleteContacts?autoIds=${data}`,
    crossDomain: true,
  })
}

// 查看用户当前乘车证
export const findPassPort = _ => {
  return https({
    method: 'post',
    url:`/user/findPassPort`,
    crossDomain: true,
  })
}

// 新增乘车证
export const addPassPort = (data) => {
  return https({
    method: 'post',
    url:`/user/addPassPort?UnitName=${data.unitName}&UserName=${data.userName}&Routes=${data.routes}&InDate=${data.inDate}`,
    crossDomain: true,
  })
}

// export const wxLogin = () => {
  
// }
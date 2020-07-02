import https from '@/common/interface.js'
// 查询货物入库信息
export const getWbInfo = (data) => {
    return https({
        url: '/inastorage/searchwbinfo',
        method: 'POST',
				data
		// handle:true
    })
}
// 货物入库
export const savecargostorage = (data) => {
    return https({
        url: '/inastorage/savecargostorage',
        method: 'POST',
				data
		// handle:true
    })
}
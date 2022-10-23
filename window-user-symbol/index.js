console.log('master 主线逻辑')

if (window?.env?.userAgent === 'jia') {
    console.log('执行 甲 客户的 定制化需求')
} else if (window?.env?.userAgent === 'yi') {
    console.log('执行 乙 客户的 定制化需求')
} else if (window?.env?.userAgent === 'bing') {
    console.log('执行 丙 客户的 定制化需求')
}
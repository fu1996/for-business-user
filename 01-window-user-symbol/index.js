const addText = text => {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}

addText('master 主线逻辑')

if (window?.env?.userAgent === 'jia') {
    addText('执行 甲 客户的 定制化需求')
} else if (window?.env?.userAgent === 'yi') {
    addText('执行 乙 客户的 定制化需求')
} else if (window?.env?.userAgent === 'bing') {
    addText('执行 丙 客户的 定制化需求')
}
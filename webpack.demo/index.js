const addText = text => {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}

const getProcessText = () => {
    if (process.env.NODE_ENV === 'production') {
        return '生产环境的代码';
    } else {
        return '开发环境的代码';
    }
}

addText(getProcessText())

const getUserText = () => {
    // 假设客户的定制业务逻辑复杂，代码量上去了，可就不是这么易读了
    if (process.env.user === 'aa') {
        return '运行客户aa 的代码';
    } else if (process.env.user === 'bb'){
        return '运行客户bb 的代码';
    } else if (process.env.user === 'cc') {
        return '运行客户cc 的代码';
    }else {
        return '运行通用代码';
    }
}

addText(getUserText())

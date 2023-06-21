import getUserTextStr from './getUserText';
import test from './test';

const addText = text => {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}

// const getProcessText = () => {
//     if (process.env.NODE_ENV === 'production') {
//         return '生产环境的代码';
//     } else {
//         return '开发环境的代码';
//     }
// }

// addText(getProcessText())

const getUserText = () => {
    // 假设客户的定制业务逻辑复杂，代码量上去了，可就不是这么易读了
    if (process.env.user === 'aa') {
        return import('./getUserText.aa').then(res => {
            console.log('User Text', res)
        });
    } else if (process.env.user === 'bb'){
        return import('./getUserText.bb').then(res => {
            console.log('User Text', res)
        });
    } else if (process.env.user === 'cc') {
        return import('./getUserText.cc').then(res => {
            console.log('User Text', res)
        });
    }else {
        return '运行通用代码';
    }
}

// const getUserText = () => getUserTextStr;

addText(getUserText())

console.log('test', test);
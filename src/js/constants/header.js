/**
 * Created by huangling on 21/05/2017.
 */
const links = [{
    label: '首页',
    to: '/home'
}, {
    label: '功能',
    to: '/feature'
}, {
    label: '我们',
    to: '/about'
}, {
    label: '学堂',
    to: '/library'
}];

const editLinks = [{
    label: '首页',
    editor: ''
}, {
    label: '功能',
    editor: ''
}, {
    label: '我们',
    editor: ''
}, {
    label: '学堂',
    editor: ''
}, {
    label: '产品更新',
    editor: 'PreviewEditor',
    data: 'update'
}, {
    label: '合作伙伴',
    editor: ''
}, {
    label: '营销学堂',
    editor: 'PreviewEditor',
    data: 'library'
}, {
    label: '加入我们',
    editor: ''
}];

export {
    links,
    editLinks
}
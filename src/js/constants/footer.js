/**
 * Created by huangling on 21/05/2017.
 */
const blocks = [
    [{
        label: '首页',
        to: '/index'
    }, {
        label: '关于我们',
        to: '/about'
    }, {
        label: '产品更新',
        to: '/update'
    }],
    [{
        label: '人&数据',
        to: {
            pathname: '/feature',
            hash: '#people'
        }
    }, {
        label: '内容&交互',
        to: {
            pathname: '/feature',
            hash: '#engage'
        }
    }, {
        label: '策略&自动化',
        to: {
            pathname: '/feature',
            hash: '#automation'
        }
    }, {
        label: '数据洞察',
        to: {
            pathname: '/feature',
            hash: '#insight'
        }
    }],
    [{
        label: '合作伙伴',
        to: '/work'
    }, {
        label: '营销学堂',
        to: '/library'
    }, {
        label: '博客',
        to: '/blog'
    }, {
        label: '加入我们',
        to: '/join'
    }]
];

export {
    blocks
};
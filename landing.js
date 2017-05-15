/**
 * Created by huangling on 13/05/2017.
 */
import Vue from 'vue';
import Header from './templates/Header.vue';

// Vue.component('my-header', {
//     template: '#header',
//     data: () => {
//         return {
//             logo: {
//                 url: 'https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png'
//             },
//             nav: {
//                 links: [{
//                     label: '功能'
//                 }, {
//                     label: '我们'
//                 }, {
//                     label: '学堂'
//                 }],
//                 classes: 'nav-item'
//             },
//             login: {
//                 label: '账号登录',
//                 classes: 'btn btn-default'
//             }
//         }
//     }
// });
//
// new Vue({
//     el: '#app',
//     data: {
//         header: {
//             logo: {
//                 url: 'https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png'
//             },
//             nav: {
//                 links: [{
//                     label: '功能'
//                 }, {
//                     label: '我们'
//                 }, {
//                     label: '学堂'
//                 }],
//                 classes: 'nav-item'
//             },
//             login: {
//                 label: '账号登录',
//                 classes: 'btn btn-default'
//             }
//         },
//         contents: {
//             landing: {
//                 title: '让营销变得简单',
//                 desc: '企业一站式营销云'
//             },
//             apply: {
//                 label: '申请试用',
//                 classes: 'btn btn-danger'
//             }
//         }
//
//     }
// });



new Vue({
    id: '#app',
    render: h => h(Header)
});
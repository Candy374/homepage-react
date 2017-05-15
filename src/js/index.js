/**
 * Created by huangling on 14/05/2017.
 */

import React from 'react';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Description from './components/Description.vue';
import Category from './components/Category.vue';
import '../less/index.less';

Vue.config.debug = true;//开启错误提示
window.onload = function () {
    new Vue({
        el: '#app',
        components: {
            'page-header': Header,
            'page-footer': Footer,
            'page-description': Description,
            'page-category': Category
        },
        data: {
            contents: {
                landing: {
                    title: '让营销变得简单',
                    desc: '企业一站式营销云'
                },
                apply: {
                    label: '申请试用',
                    classes: 'btn btn-danger'
                }
            }
        }
    });
};

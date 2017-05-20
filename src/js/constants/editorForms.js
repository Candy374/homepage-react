/**
 * Created by huangling on 20/05/2017.
 */
const library = [{
    title: '标题',
    required: true,
    hint: '',
    name: 'title',
    type: 'LabelInput'
}, {
    title: '描述',
    required: false,
    hint: '',
    name: 'desc',
    type: 'LabelInput',
}, {
    title: '摘要',
    required: false,
    hint: '',
    name: 'briefs',
    type: 'LabelInput'
}, {
    title: '内容',
    required: true,
    hint: '',
    name: 'content',
    type: 'LabelLongInput',
}, {
    title: '大小',
    required: true,
    hint: '格式为:[数字][单位], 例如:3.2MB',
    name: 'size',
    type: 'LabelInput',
    valid: (size) => /^\d+\.?\d?(M|K)B?$/i.test(size)
}, {
    title: '文件名',
    required: true,
    hint: '',
    name: 'fileName',
    type: 'LabelInput'
}, {
    title: '图片地址',
    required: true,
    hint: 'CDN路径',
    name: 'img',
    type: 'LabelInput'
}, {
    title: '标签',
    required: true,
    hint: '',
    name: 'tag',
    options: [
        {value: '数字营销', label: '数字营销'},
        {value: '广告投放', label: '广告投放'},
        {value: '营销内容', label: '营销内容'},
        {value: '营销技巧', label: '营销技巧'},
        {value: '攻略', label: '攻略'}
    ],
    type: 'LabelDropDown'
}, {
    title: '分类',
    required: true,
    hint: '',
    name: 'type',
    options: [
        {value: '电子书', label: '电子书'},
        {value: '文章', label: '文章'},
        {value: '在线视频', label: '在线视频'},
        {value: '营销词典', label: '营销词典'}
    ],
    type: 'LabelDropDown'
}, {
    title: '显示类型',
    required: true,
    hint: '',
    name: 'detailType',
    options: [
        {value: 'detail', label: '模版1'},
        {value: 'brief', label: '模版2'},
    ],
    type: 'LabelRadio'
}];

export {
    library
};
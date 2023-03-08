<template>
    <div>
        <AntForm :formParams="formParams" :formItemList="formItemList"></AntForm>
    </div>
</template>

<script>
import AntForm from "@/components/AntForm/index.vue"
export default {
    routesMeta: {
        title: '表单测试',
        keepAlive: false
	},
    components: {
        AntForm
    },
    data () {
        return {
            formParams: {
                hideRequiredMark: false,
                labelAlign: 'right',
                layout: 'inline', // 'horizontal'|'vertical'|'inline'
                labelCol: { span: 4 },
                wrapperCol: { span: 14 }
            },
            form: this.$form.createForm(this, { name: 'formName' }),
            // 表单列表项
            formItemList: [
                {
                    // formItem属性
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '姓名',
                    // 输入框属性
                    type: 'input',
                    decorator: ['userName', { rules: [{ required: true, message: '请输入姓名!' }] }],
                    placeholder: '请输入姓名',
                    min: 0,
                    maxLength: 100,
                    size: 'default', // 可选 large default small
                    allowClear: false
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '密码',
                    // 输入框属性
                    type: 'password',
                    decorator: [
                        'password',
                        { rules: [{ required: true, message: '请输入密码!' }] }
                    ],
                    placeholder: '请输入密码',
                    min: 0,
                    maxLength: 100,
                    size: 'default', // 可选 large default small
                    allowClear: false,
                    visibilityToggle: true
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '城市',
                    // 输入框属性
                    type: 'select',
                    decorator: ['city', { initialValue: 1001 }, { rules: [{ required: true, message: '请选择你的城市!' }] }],
                    placeholder: '请选择你的城市',
                    size: 'default', // 可选 large default small
                    allowClear: false,
                    options: [
                        {
                            label: '中山',
                            value: 1001
                        },
                        {
                            label: '惠州',
                            value: 1002
                        },
                        {
                            label: '东莞',
                            value: 1003
                        }
                    ]
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '年龄',
                    // 输入框属性
                    type: 'inputNumber',
                    decorator: ['age', { initialValue: 1 }, { rules: [{ required: true, message: '请输入年龄!' }] }],
                    placeholder: '请输入年龄',
                    min: 0,
                    max: 999,
                    style: 'width:100%;',
                    precision: 1,
                    decimalSeparator: '0',
                    step: 1,
                    size: 'default',
                    allowClear: false
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '性别',
                    // 输入框属性
                    type: 'radio',
                    decorator: ['sex', { initialValue: 1 }, { rules: [{ required: true, message: '请选择性别!' }] }],
                    placeholder: '请选择性别',
                    size: 'default',
                    radioList: [
                        {
                            label: '男',
                            value: 0
                        },
                        {
                            label: '女',
                            value: 1
                        }
                    ],
                    style: 'width: auto;'
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '爱好',
                    // 输入框属性
                    type: 'checkbox',
                    decorator: ['hobby', { initialValue: [1] }, { rules: [{ required: true, message: '请选择爱好!' }] }],
                    placeholder: '请选择爱好',
                    size: 'default',
                    checkboxList: [
                        {
                            label: '游戏',
                            value: 0
                        },
                        {
                            label: '篮球',
                            value: 1
                        },
                        {
                            label: '象棋',
                            value: 2
                        }
                    ],
                    style: 'width: auto;'
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '是否在职',
                    // 输入框属性
                    type: 'switch',
                    decorator: ['isWork', { valuePropName: 'checked', initialValue: true }, { rules: [{ required: true, message: '请选择工作状态!' }] }],
                    placeholder: '请选择工作状态',
                    size: 'default', // 可选 large default small
                    loading: false,
                    checkedChildren: '是',
                    unCheckedChildren: '否'
                },
                {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                    hasFeedback: false,
                    label: '备注',
                    // 输入框属性
                    type: 'textArea',
                    decorator: [
                        'remark',
                        { initialValue: '你大爷的二舅的爷爷' },
                        { rules: [{ required: true, message: '请输入备注!' }] }
                    ],
                    placeholder: '请输入备注',
                    autosize: { minRows: 2, maxRows: 6 },
                    min: 0,
                    maxLength: 100,
                    size: 'default', // 可选 large default small
                    allowClear: false
                }
            ]
        }
    },
    methods: {

    }
}

</script>
<style scoped></style>
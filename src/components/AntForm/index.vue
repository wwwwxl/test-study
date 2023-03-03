<script>
export default {
  props: {
    // form表单属性传参可修改
    formParamsProps: {
      type: Object,
      default: function() {
        return {

        }
      }
    },
    // 表单数据
    formItemList: {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      // form表单常用参数
      formParams: {
        hideRequiredMark: false,
        labelAlign: 'right',
        layout: 'inline', // 'horizontal'|'vertical'|'inline'
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      form: this.$form.createForm(this, { name: 'formName' })
    }
  },
  methods: {
    // 表单布局调整,form项是否需要labelCol, wrapperCol// horizontal需要
    formLayout() {
      const formLayout = this.formParams.layout
      const { labelCol = { span: 4 }, wrapperCol = { span: 14 } } = this.formParams
      return formLayout === 'horizontal'
        ? {
            labelCol,
            wrapperCol
          }
        : {}
    },
    // formItem项是否需要labelCol, wrapperCol(horizontal模式且,labelCol,wrapperCol表单项级别高于表格)
    formItemLayout(labelCol, wrapperCol) {
      const formDataLayout = this.formParams.layout
      const formLayout = this.formLayout()
      const formLayoutRes = Object.assign(formLayout, { labelCol, wrapperCol })
      return formDataLayout === 'horizontal' ? formLayoutRes : {}
    },
    // 按钮布局调整,formItem--button项是否需要labelCol, wrapperCol// horizontal需要
    buttonItemLayout(labelCol, wrapperCol) {
      const formLayout = this.formParams.layout

      const btnSpan = wrapperCol?.span || this.formParams.wrapperCol.span || 14
      const btnOff = labelCol?.span || this.formParams.labelCol.span || 4

      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: btnSpan, offset: btnOff }
          }
        : {}
    },
    // 生成表单项
    combineFormItem() {
      let formItemList = []
      for (let item of this.formItemList) { 
        if (item.type === 'input') {
          formItemList.push(this.combineInput(item))
        }

        if (item.type === 'password') {
          formItemList.push(this.combinePasswordInput(item))
        }

        if (item.type === 'select') {
          formItemList.push(this.combineSelect(item))
        }

        if (item.type === 'inputNumber') {
          formItemList.push(this.combineInputNumber(item))
        }

        if (item.type === 'switch') {
          formItemList.push(this.combineSwitch(item))
        }

        if (item.type === 'radio') {
          formItemList.push(this.combineRadio(item))
        }

        if (item.type === 'checkbox') {
          formItemList.push(this.combineCheckbox(item))
        }

        if (item.type === 'textArea') {
          formItemList.push(this.combineTextArea(item))
        }
      }
      return formItemList
    },
    // 生成输入框
    combineInput(item) {
      const {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        placeholder = '请输入',
        min = 0,
        maxLength = 100,
        size = 'default',
        allowClear = false
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-input
            v-decorator={decorator}
            placeholder={placeholder}
            min={min}
            maxLength={maxLength}
            size={size}
            allowClear={allowClear}
          />
        </a-form-item>
      )
    },
    // 生成密码框
    combinePasswordInput(item) {
      const {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        placeholder = '请输入',
        min = 0,
        maxLength = 100,
        size = 'default',
        allowClear = false
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-input-password
            v-decorator={decorator}
            placeholder={placeholder}
            min={min}
            maxLength={maxLength}
            size={size}
            allowClear={allowClear}
          />
        </a-form-item>
      )
    },
    // 生成文本输入框
    combineTextArea(item) {
      let {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        placeholder = '请输入',
        min,
        maxLength,
        size = 'default',
        allowClear = false
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-textarea
            v-decorator={decorator}
            placeholder={placeholder}
            min={min}
            maxLength={maxLength}
            size={size}
            allowClear={allowClear}
          />
        </a-form-item>
      )
    },
    // 生成下拉选择框
    combineSelect(item) {
      let {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        placeholder = '请输入',
        size = 'default',
        allowClear = false,
        options = []
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-select v-decorator={decorator} placeholder={placeholder} size={size} allowClear={allowClear}>
            {options.map(optionsItem => {
              return <a-select-option value={optionsItem.value}>{optionsItem.label}</a-select-option>
            })}
          </a-select>
        </a-form-item>
      )
    },
    // 生成计数器
    combineInputNumber(item) {
      let {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        placeholder = '请输入',
        size = 'default',
        style = 'width:auto;',
        allowClear = false,
        min,
        max,
        precision,
        decimalSeparator,
        step
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-input-number
            style={style}
            placeholder={placeholder}
            v-decorator={decorator}
            decimalSeparator={decimalSeparator}
            step={step}
            min={min}
            max={max}
            precision={precision}
            size={size}
            allowClear={allowClear}
          />
        </a-form-item>
      )
    },
    // 生成开关
    combineSwitch(item) {
      let {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        size = 'default',
        loading = false,
        checkedChildren,
        unCheckedChildren
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-switch
            size={size}
            checked-children={checkedChildren}
            un-checked-children={unCheckedChildren}
            v-decorator={decorator}
            loading={loading}
          />
        </a-form-item>
      )
    },
    // 生成单选框
    combineRadio(item) {
      let {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        size = 'default',
        radioList,
        style
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-radio-group v-decorator={decorator} style={style}>
            {
              radioList.map(radioItem => {
                return (
                  <a-radio value={radioItem.value}>
                    {radioItem.label}
                  </a-radio>
                  )
              })
            }
          </a-radio-group>
        </a-form-item>
      )
    },
    // 生成多选框
    combineCheckbox(item) {
      let {
        labelCol,
        wrapperCol,
        hasFeedback = false,
        label = '',
        decorator = [],
        size = 'default',
        checkboxList = [],
        style
      } = item
      // 统一参数处理,模式horizontal不允许formItem布局冲突
      const formItemLayout = this.formItemLayout(labelCol, wrapperCol)
      return (
        <a-form-item
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          hasFeedback={hasFeedback}
          label={label}
        >
          <a-checkbox-group v-decorator={decorator} style={style}>
            <a-row>
              {
                checkboxList.map(checkboxItem =>{
                  return (
                    <a-col span={8}>
                      <a-checkbox value={checkboxItem.value} size={size}>
                        {checkboxItem.label}
                      </a-checkbox>
                    </a-col>
                  )
                })
              }
            </a-row>
          </a-checkbox-group>
        </a-form-item>
      )
    },
    // 生成日期选择框
    // 确认提交函数
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  },
  // 注意事项：每一次data数据的改变都会重新渲染
  render: function(h) {
    if(this.formItemList?.length === 0) {
      return ''
    }
    // 获取表单参数项
    const formParams = Object.assign(this.formParams, this.formParamsProps)
    // 参数解构
    const { hideRequiredMark, labelAlign, layout } = formParams
    // 表单布局,当模式在horizontal 表单排版有效
    const { labelCol, wrapperCol } = this.formLayout()

    // 确认按钮布局,提前确定第一表单项位置决定
    const formItemFirst = this.formItemList[0]
    const buttonItemLayoutRes = this.buttonItemLayout(formItemFirst?.labelCol, formItemFirst?.wrapperCol)

    const formInput = (
      <a-form
        form={this.form}
        layout={layout}
        hideRequiredMark={hideRequiredMark}
        labelAlign={labelAlign}
        label-col={labelCol}
        wrapper-col={wrapperCol}
        onSubmit={this.handleSubmit}
      >
        {/* 生成表单项 */}
        {this.combineFormItem()}

        <a-form-item label-col={buttonItemLayoutRes.labelCol} wrapper-col={buttonItemLayoutRes.wrapperCol}>
          <a-button type="primary" html-type="submit">
            查询
          </a-button>
        </a-form-item>
      </a-form>
    )
    return <div>{formInput}</div>
  }
}
</script>

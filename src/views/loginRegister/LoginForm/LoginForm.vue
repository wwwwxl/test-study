<template>
  <div class="login-box">
			<a-form
				class="form-box"
				:layout="formLayout"
				ref="loginRef"
				:form="form"
				@submit="handleSubmit"
			>
				<a-form-item
					label=""
					:label-col="formItemLayout.labelCol"
					:wrapper-col="formItemLayout.wrapperCol"
				>
					<a-input
						placeholder="请输入用户名称"
						v-decorator="[
							'userName',
							{
								rules: [
									{
										required: true,
										message: '请输入用户名称!',
									},
								],
							},
						]"
					>
						<a-icon
							slot="prefix"
							type="user"
							style="color: rgba(0, 0, 0, 0.25)"
						/>
					</a-input>
				</a-form-item>
				<a-form-item
					label=""
					:label-col="formItemLayout.labelCol"
					:wrapper-col="formItemLayout.wrapperCol"
				>
					<a-input
						type="password"
						placeholder="请输入用户密码"
						autocomplete="off"
						v-decorator="[
							'password',
							{
								rules: [
									{
										required: true,
										message: '请输入用户密码!',
									},
								],
							},
						]"
					>
						<a-icon
							slot="prefix"
							type="lock"
							style="color: rgba(0, 0, 0, 0.25)"
						/>
					</a-input>
				</a-form-item>
				<a-form-item :label-col="formItemLayout.labelCol"
					:wrapper-col="formItemLayout.wrapperCol">
          <div class="flex-bet">
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href="#"> 忘记密码 </a>
          </div>
          <a-button block type="primary" html-type="submit"> 登录 </a-button>
          <div class="register-tip">
            <a href="#"> 去注册! </a>
          </div>
				</a-form-item>
			</a-form>
		</div>
</template>

<script>
export default {
data(){
return{
  formLayout: 'horizontal',
			formItemLayout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20, offset: 2 },
			},
			form: this.$form.createForm(this, { name: 'loginForm' }),
}
},
methods:{
  handleSubmit(e) {
			e.preventDefault()
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values)
          this.$emit('login', values)
				}
			})
		},
}
}

</script>
<style scoped>
.login-box {
	width: 38rem;
	height: auto;
	padding: 1.5rem;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 0.5rem;
}
.form-box {
	margin-top: 2.4rem;
}
.flex-bet{
  display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.register-tip{
  text-align: left
}
</style>
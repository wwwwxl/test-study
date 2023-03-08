<template>
	<div class="login-register-box">
		<LoginForm @login="toLogin"></LoginForm>
	</div>
</template>

<script>
import LoginForm from './LoginForm/LoginForm.vue'
import {
	loginUserUrl
} from "@/api/reqUrl"
export default {
	name: "loginRegister",
	routesMeta: {
		title: '登录注册',
		keepAlive: true,
	},
	components: {
		LoginForm,
	},
	data() {
		return {}
	},
	methods: {
		toLogin(values) {
			// console.log('Received values of form: ', values)
			this.$serviceReq.get(loginUserUrl).then((res)=>{
				console.log("res===", res)
				this.$router.push({
					name: 'layoutHome'
				})
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.login-register-box {
	width: 100%;
	height: 100%;
	background-color: #40a9ff;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>

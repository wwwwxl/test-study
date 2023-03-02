<template>
	<div>
		<div>用户管理</div>
		<a-button type="primary" @click="toUserDetail">
			用户管理详情页面
		</a-button>
	</div>
</template>

<script>
export default {
	routesMeta: {
		title: '用户管理',
		keepAlive: true
	},
	data() {
		return {}
	},
	methods: {
		toUserDetail() {
			this.$router.push({
				name: "systemUserUserDetail"
			})
		}
	},
}
</script>

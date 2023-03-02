<template>
	<div class="layout">
		<div class="lay-left">
			<LayoutLeft></LayoutLeft>
		</div>
		<div class="lay-right">
			<div class="lay-r-top">上下标题头</div>
			<div class="lay-r-content">
				<keep-alive
					:include="includeList"
					:exclude="excludeList"
					:max="max"
				>
					<router-view />
				</keep-alive>
			</div>
			<div class="lay-r-bot">
				<LayoutBot></LayoutBot>
			</div>
		</div>
	</div>
</template>

<script>
import LayoutLeft from './LayoutLeft/LayoutLeft.vue'
import LayoutBot from './LayoutBot/LayoutBot.vue'
export default {
	name: "layoutHome",
	components: {
		LayoutLeft,
		LayoutBot,
	},
	data() {
		return {
			// keep-alive匹配的是组件内的name，不是路由的name！
			// 1.keep-alive 先匹配被包含组件的 name 字段，如果 name 不可用，则匹配当前组件 components 配置中的注册名称。
			// 2.keep-alive 不会在函数式组件中正常工作，因为它们没有缓存实例。
			// 3.当匹配条件同时在 include 与 exclude 存在时，以 exclude 优先级最高。
			// 4.包含在 keep-alive 中，但符合 exclude ，不会调用 activated 和 deactivated。
			max: 3,
			// includeList: ['403','404','500','userDetail'], // 页面
			includeList: /403|404|500|userDetail/, // 精准匹配没有模糊匹配
			excludeList: [],
		}
	},
	create() {},
	methods: {},
}
</script>
<style scoped lang="scss">
.layout {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.lay-left {
	width: 20rem;
	height: 100%;
}
.lay-right {
	width: calc(100% - 20rem);
	height: 100%;
	background: #f0f2f5;
	.lay-r-top {
		width: 100%;
		height: 7rem;
		background-color: #fff;
	}
	.lay-r-content {
		width: 100%;
		height: calc(100% - 12rem);
		padding: 1rem;
		box-sizing: border-box;
	}
	.lay-r-bot {
		width: 100%;
		height: 5rem;
		line-height: 5rem;
	}
}
</style>

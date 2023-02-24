<template>
	<div class="about" ref="parentRef">
		<h1>This is an about page</h1>
		<div ref="childBotRef" id="top">
			<button @click="scrollToBotBtn"><div>滚动到最底端</div></button>
		</div>
		<div class="zhan-wei"></div>

		<div ref="childYouLocatRef" id="mid">
			<button @click="scrollToBotYouLocat"><div>滚动到指定距离</div></button>
		</div>

		<div class="zhan-wei"></div>
		<div>
			指定距离200
		</div>

		<div class="zhan-wei"></div>
		<div ref="childTopRef" id="bot">
			<button @click="scrollToTopBtn"><div>滚动到最上端</div></button>
		</div>
	</div>
</template>
<script>
	export default{
		routesMeta: {
			title: '关于',
			keepAlive: true
		},
		data() {
			return {}
		},
		mounted() {
			this.$nextTick(() => {
				setTimeout(()=>{
					let scrollWidth = document.body.scrollWidth
					let scrollHeight = document.body.scrollHeight
					this.$refs.parentRef.scrollTo(scrollWidth,scrollHeight);
				},100)
			})
		},
		methods: {
			scrollToBotBtn() {
				let scrollHeight = document.body.scrollHeight
				this.$refs.parentRef.scrollTo(0,scrollHeight);
			},
			scrollToBotYouLocat() {
				this.$refs.parentRef.scrollTo(0,200);
			},
			scrollToTopBtn() {
				// let getElementById = document.getElementById("top")
				// console.log('===getElementById元素', getElementById)
				// if(getElementById) {
				// 	getElementById.scrollIntoView();
				// }

				this.$refs.childBotRef.scrollIntoView();
			}
		}
	}
</script>
<style scoped>
.about{
	width: 100%;
	height: 100%;
	overflow: auto;
}
.zhan-wei{
	width: 100%;
	height: 500px;
}
</style>

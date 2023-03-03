<template>
	<a-space class="btn-box">
		<a-button type="primary" @click="addBtn" icon="plus">增加</a-button>
		<a-button @click="editBtn" icon="edit">修改</a-button>
		<a-button @click="delBtn" type="danger" icon="minus">删除</a-button>
	</a-space>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {
		// 增加
		addBtn() {
			this.$emit('add')
		}, // 修改
		editBtn() {
			this.$emit('edit')
		}, // 删除
		delBtn() {
			this.$emit('del')
		},
	},
}
</script>
<style>
.btn-box{ margin-top: 0.6rem;
}
</style>

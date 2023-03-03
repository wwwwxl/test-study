<template>
	<a-table :columns="tableColumns" :data-source="tableData" :bordered="bordered" :loading="tableLoading"
		:row-selection="rowSelection" :row-key="rowKey" :scroll="scroll" :pagination="pagePaginations"
		@change="tableOPeraFun">
		<template v-for="col in tableColumns" :slot="col.scopedSlots ? col.scopedSlots.customRender : ''"
			slot-scope="text, record">
			<slot :name="col.scopedSlots ? col.scopedSlots.customRender : ''" v-bind="record" />
		</template>
	</a-table>
</template>
<script>
let paginations = {
	current: 1,
	total: 0,
	showSizeChanger: true,
	showQuickJumper: true,
	pageSizeOptions: ['10', '20', '30', '50', '100', '150'],
}
export default {
	props: {
		tableColumns: {
			type: Array,
			default: function () {
				return []
			},
		},
		tableData: {
			type: Array,
			default: function () {
				return []
			},
		},
		bordered: {
			type: Boolean,
			default: true,
		},
		tableLoading: {
			type: Boolean,
			default: false,
		},
		scroll: {
			type: Object,
			default: () => { },
		}, // 主键
		rowKey: {
			type: String,
			default: 'id',
		}, // 允许多选
		rowSelection: {
			type: Object,
			default: function () {
				return null
			},
		}, // 分页参数
		paginations: {
			type: Object,
			default: function () {
				return paginations
			},
		},
	},
	watch: {
		paginations: {
			handler (val, oldVal) {
				this.pagePaginations = Object.assign(this.pagePaginations, val)
			},
			deep: true,
		},
	},
	data () {
		return {
			pagePaginations: paginations,
		}
	},
	created () {
		this.pagePaginations = Object.assign(
			this.pagePaginations,
			this.paginations
		)
	},
	methods: {
		// 分页、排序、筛选变化时触发
		tableOPeraFun (pagination, filters, sorter, { currentDataSource }) {
			this.$emit('tableOPeraFun', pagination, filters, sorter, {
				currentDataSource,
			})
		},
	},
}
</script>

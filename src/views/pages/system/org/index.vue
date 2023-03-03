<template>
	<div class="org-box">
		<div class="tree-left bg-white p-10">
			<AntTree :treeData="treeData"></AntTree>
		</div>
		<div class="con-right chang-scroll-bar">
			<div class="search-top bg-white p-10">
				<AntForm :formItemList="formItemList"></AntForm>
			</div>
			<div class="table-con bg-white p-10">
				<AntButton class="p-b-10"></AntButton>
				<AntTable :tableColumns="tableColumns" :tableData="tableData">
					<span slot="action" slot-scope="record">
						<a>{{ record }}</a>
						<a-divider type="vertical" />
						<a>Delete</a>
					</span>
				</AntTable>
			</div>
		</div>
	</div>
</template>

<script>
import AntTree from "@/components/AntTree/index.vue"
import AntForm from "@/components/AntForm/index.vue"
import AntButton from "@/components/AntButton/index.vue"
import AntTable from "@/components/AntTable/index.vue"
export default {
	routesMeta: {
		title: '组织管理',
		keepAlive: true
	},
	components: {
		AntTree,
		AntForm,
		AntButton,
		AntTable
	},
	data () {
		return {
			treeData: [
			{
					title: '0-0',
					key: '0-0',
					children: [
					{
						title: '0-0-0',
						key: '0-0-0',
						children: [
						{ title: '0-0-0-0', key: '0-0-0-0' },
						{ title: '0-0-0-1', key: '0-0-0-1' },
						{ title: '0-0-0-2', key: '0-0-0-2' },
						],
					},
					{
						title: '0-0-1',
						key: '0-0-1',
						children: [
						{ title: '0-0-1-0', key: '0-0-1-0' },
						{ title: '0-0-1-1', key: '0-0-1-1' },
						{ title: '0-0-1-2', key: '0-0-1-2' },
						],
					},
					],
				}
			],
			formItemList: [
				{
					// formItem属性
					labelCol: { span: 6 },
					wrapperCol: { span: 16 },
					hasFeedback: false,
					label: '姓名',
					// 输入框属性
					type: 'input',
					decorator: ['userName', { initialValue: '你大爷' }, { rules: [{ required: true, message: '请输入姓名!' }] }],
					placeholder: '请输入姓名',
					min: 0,
					maxLength: 100,
					size: 'default', // 可选 large default small
					allowClear: false
				},
			],
			tableColumns: [
				{
					title: '名称',
					dataIndex: 'name',
					key: 'name',
				},
				{
					title: '分类',
					dataIndex: 'type',
					key: 'type',
				},
				{
					title: '排序',
					dataIndex: 'sort',
					key: 'sort',
				},
				{
					title: '操作',
					dataIndex: 'action',
					key: 'action',
					scopedSlots: { customRender: 'action' }
				}
			],
			tableData: [
				{
					id: 1,
					name: '名称',
					type: '公司',
					sort: 1
				}
			]
		}
	},
	created() {
		this.getTableData()
	},
	methods: {
		// 获取数据请求
		getTableData() {
			let reqUrl = ""
			this.$serviceReq.get("/demoList").then((res)=>{
				console.log("res", res)
			})
		}
	},
}
</script>
<style scoped lang="scss">
.org-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	.tree-left{
		flex: 1;
		height: auto;
		max-height: 100%;
	}

	.con-right{
		flex:4;
		height: auto;
		margin-left: 1rem;
		max-height: 100%;
	}
}

.bg-white {
	background-color: white;
}

.p-10 {
	padding: 1rem;
	box-sizing: border-box;
}
.p-b-10 {
	padding-bottom: 1rem;
	box-sizing: border-box;
}

.chang-scroll-bar{
	--scroll-bar: 0;
	overflow: auto;
}
</style>
<template>
	<div class="org-box">
		<div class="tree-left bg-white p-10">
			<AntTree :treeData="treeData" :replaceFields="replaceFields"></AntTree>
		</div>
		<div class="con-right chang-scroll-bar">
			<div class="search-top bg-white p-10">
				<AntForm :formItemList="formItemList"></AntForm>
			</div>
			<div class="table-con bg-white p-10">
				<AntButton class="p-b-10" @add="addData" @edit="editData" @del="delData"></AntButton>
				<AntTable 
					ref="antTableRef"
					:tableColumns="tableColumns" 
					:tableData="tableData" 
					:rowKey="rowKey" 
					:paginations="paginations"
					:rowSelection="rowSelection"
					@tableOPeraFun="tableOPeraFun">
					<span slot="action" slot-scope="record">
						<a href="javascript:;" @click="editRow(record)">编辑</a>
						<a-divider type="vertical" />
						<a-popconfirm
							title="是否确认删除?"
							@confirm="() => deleRow(record)"
							ok-text="确认"
    						cancel-text="取消"
						>
							<a href="javascript:;">删除</a>
						</a-popconfirm>
					</span>
				</AntTable>
			</div>
		</div>
		<addEditOrg ref="addOrgRef"></addEditOrg>
	</div>
</template>

<script>
import AntTree from "@/components/AntTree/index.vue"
import AntForm from "@/components/AntForm/index.vue"
import AntButton from "@/components/AntButton/index.vue"
import AntTable from "@/components/AntTable/index.vue"
import addEditOrg from "./addEditOrg.vue"
import {jsonToArray} from "@/utils/selfUtils.js"
import {
	demoListUrl,
    orgListUrl
} from "@/api/reqUrl"
export default {
	routesMeta: {
		title: '组织管理',
		keepAlive: true
	},
	components: {
		AntTree,
		AntForm,
		AntButton,
		AntTable,
		addEditOrg
	},
	data () {
		return {
			replaceFields:{
				children:'children', 
				title:'orgName', 
				key:'orgId' 
			},
			treeData: [],
			formItemList: [
				{
					// formItem属性
					labelCol: { span: 6 },
					wrapperCol: { span: 16 },
					hasFeedback: false,
					label: '名称',
					// 输入框属性
					type: 'input',
					decorator: ['orgName', { initialValue: null }, { rules: [{ required: true, message: '请输入公司名称!' }] }],
					placeholder: '请输入公司名称',
					min: 0,
					maxLength: 100,
					size: 'default', // 可选 large default small
					allowClear: false
				},
			],
			rowKey: "orgId",
			tableColumns: [
				{
					title: '名称',
					dataIndex: 'orgName',
					key: 'orgName',
				},
				{
					title: '分类',
					dataIndex: 'orgTypeName',
					key: 'orgType',
				},
				{
					title: '注册时间',
					dataIndex: 'registerTime',
					key: 'registerTime',
				},
				{
					title: '操作',
					dataIndex: 'action',
					key: 'action',
					scopedSlots: { customRender: 'action' }
				}
			],
			tableData: [],
			paginations: {
				total: 0,
				pageSize: 10,
				current: 1
			},
			rowSelection: {
				onChange: (selectedRowKeys, selectedRows)=>this.onChange(selectedRowKeys, selectedRows),
				onSelect: (record, selected, selectedRows)=>this.onSelect(record, selected, selectedRows),
				onSelectAll: (selected, selectedRows, changeRows)=>this.onSelectAll(selected, selectedRows, changeRows)
			},
			tableSelectRowKey: [],
			tableSelectRowData: []
		}
	},
	created() {
		this.treeDataFun()
	},
	methods: {
		treeDataFun() {
			this.$serviceReq.get(orgListUrl).then((res)=>{
				console.log("res===", res)
				let copyRes = this.$_lodash.cloneDeep(res)
				this.treeData = res.result?.rows || []
				this.transTableData(copyRes) 
			})
		},
		transTableData(res){
			let needData = res.result?.rows || []
			this.tableData = jsonToArray(needData)
			this.paginations.total = res.result?.total || 0
		},
		tableOPeraFun(pagination, filters, sorter, {
				currentDataSource,
			}) {
				console.log("====tableOPeraFun", pagination, filters, sorter, currentDataSource)
			this.paginations.current = pagination.current
			this.paginations.pageSize = pagination.pageSize
		},
		editRow(record) {
			// console.log("===editRow===", record)
			this.$refs.addOrgRef.showModal(record)
		},
		deleRow(record) {
			console.log("===deleRow===", record)
		},
		onChange(selectedRowKeys, selectedRows){
			// console.log(`onChange=selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			this.tableSelectRowData = selectedRows
			this.tableSelectRowKey = selectedRowKeys
		},
		onSelect(record, selected, selectedRows){
			// console.log("onSelect",record, selected, selectedRows);
		},
		onSelectAll(selected, selectedRows, changeRows){
			// console.log("onSelectAll",selected, selectedRows, changeRows);
		},
		addData() {
			this.$refs.addOrgRef.showModal()
		},
		editData() {
			if(this.tableSelectRowKey.length === 0) {
				this.$message.warning('请选择一条你需要编辑得数据');
				return 
			}
			if(this.tableSelectRowKey.length > 1) {
				this.$message.warning('只能选择一条数据进行编辑');
				return 
			}
			this.$refs.addOrgRef.showModal(this.tableSelectRowData[0])
		},
		delData() {
			if(this.tableSelectRowKey.length === 0) {
				this.$message.warning('请至少选择一条需要删除得数据');
				return 
			}
		}

		// 获取数据请求
		// getTableData() {
		// 	this.$serviceReq.get(demoListUrl).then((res)=>{
		// 		console.log("res", res)
		// 	})
		// 	// 示例
		// 	// this.axios.get('/testStudy/service/demoList').then((res) => {
		// 	// 	console.log(res)
		// 	// })
		// }
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
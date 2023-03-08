<template>
    <AntModal ref="antModalRef" :modalTitle="antModalTitleName" @modal-handle-ok="modalFormSubmit">
        <AntForm ref="antFormRef" :formParamsProps="formParamsProps" :isNeedOperaBtn="false" :formItemList="formItemList">
            <template v-slot:formItemHeader>
                <a-form-item :labelCol="formParamsProps.labelCol" :wrapperCol="formParamsProps.wrapperCol" label="上级组织">
                    <a-tree-select
                        v-decorator=treeSelDecorator
                        :replaceFields="replaceFields"
                        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                        :tree-data="topOrgList"
                        placeholder="请选择上级组织"
                        tree-default-expand-all
                    >
                    </a-tree-select>
                </a-form-item>
            </template>
        </AntForm>
    </AntModal>
</template>

<script>
import AntModal from "@/components/AntModal/index.vue"
import AntForm from "@/components/AntForm/index.vue"
import {
    orgListUrl
} from "@/api/reqUrl"
export default {
    components: {
        AntModal,
        AntForm
    },
    data () {
        return {
            antModalTitleName: "增加组织",
            replaceFields:{
				children:'children', 
				title:'orgName', 
				key:'orgId',
                value: 'orgId'
			},
            topOrgList: [
                {
                    orgId: 10,
                    orgName: '顶级',
                    children: []
                }
            ],
            treeSelDecorator: ['topOrg', { rules: [{ required: true, message: '请选择上级组织!' }] }],
            formParamsProps: {
                layout: 'horizontal',
                labelCol: { span: 6 },
                wrapperCol: { span: 16 }
            },
            formItemList: [
                {
                    label: '组织名称',
                    type: 'input',
                    decorator: ['orgName', { rules: [{ required: true, message: '请输入组织名称!' }] }],
                    placeholder: '请输入组织名称',
                    min: 0,
                    maxLength: 100
                },
                {
                    label: '组织分类',
                    type: 'select',
                    decorator: ['orgType', { rules: [{ required: true, message: '请选择组织分类!' }] }],
                    placeholder: '请选择组织分类',
                    options: [
                        {
                            label: '公司',
                            value: 0
                        },
                        {
                            label: '部门',
                            value: 1
                        }
                    ]
                },
            ],

        }
    },
    created() {
        this.treeDataFun()
    },
    methods: {
        treeDataFun() {
			this.$serviceReq.get(orgListUrl).then((res)=>{
				console.log("res===treeDataFun", res)
				this.topOrgList[0].children = res.result?.rows || []
			})
		},
        showModal (row) {
            // console.log("row===",row)
            this.antModalTitleName = row ? '编辑组织': '增加组织'
            this.$refs.antModalRef.showModal()
            this.$nextTick(()=>{
                if(row) {
                    let initValObj = {
                        topOrg: row.pOrgId,
                        orgName: row.orgName,
                        orgType: row.orgType
                    }
                    this.$refs.antFormRef.setFieldsValueFun(initValObj)
                }
            })
        },
        handleChange (value) {
            console.log(`selected ${value}`);
        },
        modalFormSubmit() {
            this.$refs.antFormRef.handleSubmit().then((res)=>{
                this.$refs.antModalRef.openLoading()
                console.log("submitValue", res);
                setTimeout(()=>{
                    this.$refs.antModalRef.closeLoading()
                },2000)
            })
        }
    }
}

</script>
<style scoped></style>
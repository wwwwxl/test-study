let list = {
    data: {
        total: 50,
        rows: [
            {
                pOrgId: 10,
                orgId: 1001,
                orgName: '京海市飞花有限责任公司',
                orgType: 0,
                orgTypeName: "公司",
                registerTime: '@datetime',
                children: [
                    {
                        pOrgId: 1001,
                        orgId: 100101,
                        orgName: '综合部',
                        orgType: 1,
                        orgTypeName: "部门",
                        registerTime: '@datetime',
                    },
                    {
                        pOrgId: 1001,
                        orgId: 100102,
                        orgName: '财务部',
                        orgType: 1,
                        orgTypeName: "部门",
                        registerTime: '@datetime',
                    }
                ]
            },
            {
                pOrgId: 10,
                orgId: 1002,
                orgName: '飞蛾市分公司',
                orgType: 0,
                orgTypeName: "公司",
                registerTime: '@datetime'
            },
            {
                pOrgId: 10,
                orgId: 1003,
                orgName: '艾尔莎分公司',
                orgType: 0,
                orgTypeName: "公司",
                registerTime: '@datetime'
            }
        ]
    }
}
export default {
    'get|/testStudy/service/orgList': list
}
let list = {
    data: {
        total: 100,
        'rows|100':[
            {
                userId: '@id',
                userName: '@name',
                userPhone:/^1[3-9]\d{9}$/,
                'age|11-99':1,
                address:'@county(true)',
                email:'@email',
                "isMale|1": [
                    "男",
                    "女"
                ],
                registerTime:'@datetime',
                userHeadImg(){
                    return Mock.Random.image('100x100',Mock.Random.color(),'#757575','png',this.userName)
                }
            }
        ]
    }
}
export default {
    'get|/testStudy/service/user': list
}
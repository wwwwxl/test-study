let list = {
    data: {
        total: 30,
        'rows|20': [
            {
                roleId: '@id',
                roleName: '@name',
                registerTime: '@datetime',
            }
        ]
    }
}
export default {
    'get|/testStudy/service/roleList': list
}
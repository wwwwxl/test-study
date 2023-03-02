let list = {
    data: {
        total: 100,
        'rows|100': [
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
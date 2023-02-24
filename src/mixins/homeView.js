export default{
    data() {
        return {
            currentName: 'mixinsData currentName',
            mixinsData_1: 'mixinsData_1',
            fzItem: {
                a: 1,
                b: {
                    bb: 'fzItem=mixinsData_111',
                    bbb: 'fzItem=mixinsData_1111'
                }
            }
        }
    },
    created() {
        console.log('i am a ===mixins=== created')
    },
    methods: {
        isMixinsFun() {
            console.log('i am a ===mixins=== isMixinsFun')
        },
        inMethodsFun_1() {
            console.log('i am a ===mixins=== inMethodsFun_1')
        },
        inMethodsFun_2() {
            console.log('i am a ===mixins=== inMethodsFun_2')
        }
    }
}
<template>
	<div>作为测试Vue.use得全局组件</div>
</template>

<script>
const outSide = {
    a:1,
    b:2
}
export default {
	data() {
        this.inSide = {
            a:1,
            b:2
        }
		return {
            dataSide: Object.freeze({
                a: 1,
                b: {
                    bb: 1
                }
            }),
            dataObserveSide: {
                a: 1,
                b: 2
            }
        }
	},
	created() {
        this.dataSide.b.bb = 2
        // console.log('===inSide===', this.inSide)
        // console.log('===outSide===', outSide)
        // console.log('===dataSide===', this.dataSide)
        // console.log('===dataObserveSide===', this.dataObserveSide)
        this.dataSide = {
            c: 1,
            d: 2
        }
    },
	methods: {},
}
</script>
<style scoped>
div {
	font-size: 40px;
	color: #fbb;
	text-align: center;
}
</style>

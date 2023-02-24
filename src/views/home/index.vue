<template>
  <div class="home">
    <div>currentName===={{ currentName }}</div>
    <div>mixinsData_1===={{ mixinsData_1 }}</div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import homeView from "@/mixins/homeView";

export default {
  routesMeta: {
			title: '首页',
			keepAlive: true
	},
  components: {
    HelloWorld,
  },
  mixins: [homeView],
  data() {
    return {
      currentName: 'homeView currentName',
      mixinsData_1: 'homeView mixinsData_1',
      fzItem: {
        a: 1,
        b: {
            bb: 'fzItem=homeView_11'
        }
      }
    }
  },
  created() {
    console.log('i am a ===homeView=== created', this.currentName, this.fzItem)
  },
  mounted() {
    this.inMethodsFun_1()
    this.inMethodsFun_2()
  },
  methods: {
    inMethodsFun_1() {
        console.log('i am a ===homeView=== inMethodsFun_1')
    },
    inMethodsFun_2() {
        console.log('i am a ===homeView=== inMethodsFun_2')
    }
  }
};
</script>

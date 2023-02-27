<template>
  <div class="layout">
    <div class="lay-left">
      <LayoutLeft></LayoutLeft>
    </div>
    <div class="lay-right">
      <div class="lay-r-top"></div>
      <div class="lay-r-content"></div>
      <div class="lay-r-bot"></div>
    </div>
  </div>
</template>

<script>
import LayoutLeft from './LayoutLeft/LayoutLeft.vue'
export default {
components: {
  LayoutLeft
},
data(){
return{

}
},
create(){

},
methods:{

}
}

</script>
<style scoped lang="scss">
.layout{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.lay-left{
  width: 20rem;
  height: 100%;
}
.lay-right{
  width: calc(100% - 20rem);
  height: 100%;
  .lay-r-top{
    width: 100%;
    height: 10rem;
  }
  .lay-r-content{
    width: 100%;
    height: calc(100% - 15rem);
  }
  .lay-r-bot{
    width: 100%;
    height: 5rem;
  }
}
</style>
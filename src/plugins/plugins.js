// plugins.js
const Plugin1 = {
    install(a,b){
      console.log('Plugin1 第一个参数：',a)
      console.log('Plugin1 第二个参数：',b)
    }
  }
   
  function Plugin2(a,b){
    console.log('Plugin2 第一个参数：',a)
    console.log('Plugin2 第二个参数：',b)
  }
   
  export{Plugin1,Plugin2}
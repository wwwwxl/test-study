<template>
  <div class="hello">
    <component-name></component-name>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    let classStudentObject = {
      class: '班级1',
      students: [
        {studentNo: 11, studentName: 'q'},
        {studentNo: 12, studentName: 'w'},
        {studentNo: 13, studentName: 'e'},
        {studentNo: 14, studentName: 'r'}
      ],
      [Symbol.iterator]: function() {
        let that = this
        let index = -1
        return {
          next: function () {
            if(index< that.students.length-1) {
              index++;
              return {
                value: that.students[index],
                done: false
              }
            }else {
              return {
                value: undefined,
                done: true
              }
            }
          }
        }
      }
      // [Symbol.iterator]: function() {
      //   let that = this
      //   let index = 0
      //   return {
      //     next: function() {
      //       return index < that.students.length ?
      //       { 
      //           value: that.students[index++],
      //           done: false
      //       } 
      //       :
      //       {
      //           value: undefined,
      //           done: true
      //       };
      //     }
      //   }
      // }
    }
    // for(let item of classStudentObject) {
    //   console.log('item===',item)
    // }
  },
  mounted() {
    // console.log('====',this.$say())
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

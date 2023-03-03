<template>
    <a-tree
      :autoExpandParent="autoExpandParent"
      :tree-data="treeData"
      :checkable="checkable"
      :default-expanded-keys="expandedKeys"
      @select="selectFun"
    />
  </template>
  
  <script>
  export default {
    props: {
        // 自动展开父节点
        autoExpandParent: {
            type: Boolean,
            default: function() {
                return true
            }
        },
        // 是否可选中
        checkable: {
            type: Boolean,
            default: function() {
                return false
            }
        },
        // 默认展开key
        expandedKeys: {
            type: Array,
            default: function() {
                return []
            }
        },
        // 树数据
        treeData: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    data() {
      return {
        
      };
    },
    methods: {
        selectFun(event) {
            console.log("event", event)
        }
    }
  };
  </script>
  
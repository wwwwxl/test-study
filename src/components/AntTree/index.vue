<template>
    <a-tree
      v-if="treeData.length>0"
      :autoExpandParent="autoExpandParent"
      :tree-data="treeData"
      :checkable="checkable"
      :defaultExpandedKeys="expandedKeys"
      @select="selectFun"
      :replaceFields="replaceFields"
      :defaultExpandAll="defaultExpandAll"
    />
  </template>
  
  <script>
  // 增加数据判断，有数据时才渲染tree组件
  export default {
    props: {
        // 自动展开父节点
        autoExpandParent: {
            type: Boolean,
            default: function() {
                return true
            }
        },
        // 默认展开所有
        defaultExpandAll: {
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
        },
        // 替换树节点prop
        replaceFields: {
            type: Object,
            default: function() {
                return {
                    children:'children', 
                    title:'title', 
                    key:'key' 
                }
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
  
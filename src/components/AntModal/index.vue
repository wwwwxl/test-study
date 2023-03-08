<template>
    <a-modal v-model="visible" :title="modalTitle" on-ok="handleOk">
        <template slot="footer">
            <a-button key="back" @click="handleCancel">
            {{ cancelBtnName }}
            </a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
            {{ submitBtnName }}
            </a-button>
        </template>
       <slot></slot>
    </a-modal>
  </template>
  <script>
  export default {
    props: {
        // 标题
        modalTitle: {
            type: String,
            default: function() {
                return "Title"
            }
        },
        // 取消按钮名称
        cancelBtnName: {
            type: String,
            default: function() {
                return "取消"
            }
        },
        // 确认按钮名称
        submitBtnName: {
            type: String,
            default: function() {
                return "确认"
            }
        }
    },
    data() {
      return {
        /**
         * loading 确认提交状态
         * visible 弹框是否可见
         */
        loading: false,
        visible: false,
      };
    },
    methods: {
      // 显示弹框
      showModal() {
        this.visible = true;
      },
      // 确认提交
      handleOk(e) {
        this.$emit("modal-handle-ok")
      },
      // 取消关闭弹框
      handleCancel(e) {
        this.visible = false;
        this.$emit("modal-handle-cancel")
      },
      // 打开loading
      openLoading() {
        this.loading = true;
      },
      // 关闭loading
      closeLoading() {
        this.loading = false;
      }
    },
  };
  </script>
  
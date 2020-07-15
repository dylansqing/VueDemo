<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-07-01 11:22:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-12 21:32:12
-->
<template>
  <div class="message-center">
    <div>{{ title }}</div>
    <div>{{ systemInfo.browber }}</div>
    <div>{{ systemInfo.ip }}</div>
    <div>{{ systemInfo.area }}</div>
    <div>{{ systemInfo.os }}</div>
  </div></template
>

<script>
/**
 * @description: 获取系统信息
 * @param {type} none
 * @return: none
 */
import * as systemTool from "../../public/js/systemTool";

export default {
  data() {
    return {
      title: "systemInfo",
      systemInfo: {
        browber: "",
        ip: "",
        area: "",
        os: ""
      }
    };
  },
  methods: {
    async getSystemInfo() {
      this.systemInfo.browber = await systemTool.GetCurrentBrowser();
      this.systemInfo.ip = window.sessionStorage.getItem("ip");
      this.systemInfo.area = window.sessionStorage.getItem("area");
      this.systemInfo.os = await systemTool.GetOs();
    }
  },
  mounted() {
    this.getSystemInfo();
  }
};
</script>

<style scoped></style>

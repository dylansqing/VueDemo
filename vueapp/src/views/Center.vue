<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-06-30 14:35:57
 * @LastEditors: dylan
 * @LastEditTime: 2020-07-01 19:30:29
-->

<template>
  <div class="center">
    <el-row :gutter="20">
      <el-col :span="4" :offset="20"><DateTimeBox /></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="20"><weather></weather></el-col>
    </el-row>
  </div>
</template>

<script>
import DateTimeBox from "@/components/DateTimeBox";
import Weather from "@/components/Weather";

export default {
  components: {
    DateTimeBox,
    Weather
  }
};
</script>

<style scoped></style>

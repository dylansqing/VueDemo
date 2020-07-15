<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-07-10 12:38:37
 * @LastEditors: dylan
 * @LastEditTime: 2020-07-10 15:58:48
-->
<template>
  <div class="weather-box">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <span>
          <center>
            <div>{{ city }}</div>
          </center></span
        >
      </div>
      <div class="weather-info">
        <el-row>
          <el-col :span="12">晴</el-col>
          <el-col :span="12">26℃</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">西北风</el-col>
          <el-col :span="12">67%</el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "成都"
    };
  },
  methods: {
    getWeatherByCity() {
      console.log("start get!");
    },
    async getLocalCityByIP() {
      let e = await this.$axios.get(
        `${process.env.VUE_APP_EXPRESS_URL}/request/weather`
      );
      console.log(e);
    }
  },
  mounted() {
    this.getLocalCityByIP();
  }
};
</script>

<style>
.weather-box .weather-info .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
}

.weather-box .weather-info .el-row .el-col {
  margin: 0.5rem;
}
</style>

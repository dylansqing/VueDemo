<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-06-30 14:35:57
 * @LastEditors: dylan
 * @LastEditTime: 2020-07-01 19:29:34
-->

<template>
  <div class="box">
    <el-card shadow="always">
      <div id="clock">
        <p class="date">{{ timer.date }}</p>
        <p class="time">{{ timer.time }}</p>
        <p class="text">{{ timer.week }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      timer: {
        date: "",
        time: "???",
        week: "???",
      },
    };
  },
  methods: {
    updatetime() {
      setInterval(() => {
        let e = new Date();
        this.timer.date = `${e.getFullYear()}-${e.getMonth() +
          1}-${e.getDate()}`;
        this.timer.time = `${
          e.getHours() > 9 ? e.getHours() : "0" + e.getHours()
        }:${e.getMinutes() > 9 ? e.getMinutes() : "0" + e.getMinutes()}:${
          e.getSeconds() > 9 ? e.getSeconds() : "0" + e.getSeconds()
        }`;
        this.timer.week = this.week[e.getDay()];
      }, 100);
    },
    getLocalCity() {
      console.log("myPosition");
    },
  },
  mounted() {
    this.updatetime();
    this.getLocalCity();
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  /* background: #b6eb7a; */
}

#clock {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: relative;
  color: #07031a;
  text-shadow: 0 0 20px #f5f5f5, 0 0 20px #f5f5f5;
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 40px;
  padding: 5px 0;
}
#clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
#clock .text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>

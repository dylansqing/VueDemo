<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-07-02 11:03:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-14 21:20:38
-->
<template>
  <div class="box">
    <div class="container" style="height:90vh">
      <center class="login-box">
        <el-card :body-style="{ padding: '0px' }">
          <div slot="header">
            <span class="login-title">Welcome to the website</span>
          </div>
          <el-row :gutter="30">
            <el-col :span="4"
              ><span><p>用户ID</p> </span></el-col
            >
            <el-col :span="14" :offset="2"
              ><el-input
                v-model="UID"
                placeholder="UserID"
                maxlength="15"
                oninput="value=value.replace(/[^\d]/g,'')"
              ></el-input
            ></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4"
              ><span><p>密码</p> </span></el-col
            >
            <el-col :span="14" :offset="2"
              ><el-input
                v-model="PWD"
                placeholder="Password"
                type="password"
                maxlength="15"
              ></el-input
            ></el-col>
          </el-row>
          <div style="margin:20px">
            <el-button class="login-btn" @click="login">LOGIN</el-button>
          </div>
        </el-card>
      </center>
    </div>
    <center>
      <div class="everyday">
        <p style="color:white">
          独处是灵魂的假期，你可以不为他人奔忙，只为给自己带来惊喜与喜悦。
        </p>
      </div>
    </center>
    <video
      class="bg"
      loop
      muted
      autoplay
      src="../../public/video/05796_abstract_continuous_dust_particles_overlay_with_light_source_www.cutestockfootage.com.mp4"
    ></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UID: "",
      PWD: ""
    };
  },
  methods: {
    async login() {
      this.$router.push({ name: "Main" });
      // let res = await this.$axios.post('http://localhost:1234/customer/create',{
      //   username:'edit',
      //   password:123
      // })
      // console.log(res)
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.bg {
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
}

.login-box .login-title {
  font-family: Comic Sans MS;
  font-size: 20px;
  color: #f1c232;
}

.login-box .el-card {
  margin: 20px;
  width: 30vw;
  /* background-color: rgba(255, 255, 255, 0.25); */
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  /* box-shadow: 0 0 20px #e5e5e5; */
}

.login-box .el-card__header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border: none;
}

.login-box .el-input {
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 25px;
}

.login-box .el-input__inner {
  /* background: rgba(255, 255, 255, 0.25); */
  background: transparent;
  border-radius: 25px;
  border: none;
  text-indent: 1em;
  font-family: Comic Sans MS;
  color: black;
  font-size: 22px;
}

.login-box .card-body .el-col {
  font-size: 16px;
  margin: 10px;
}

.login-box .card-body .el-col p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box .el-row {
  margin: 10px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.login-box {
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.25);
  margin: 0;
}

.login-box .login-btn {
  background-image: linear-gradient(
    to right,
    RGB(0, 118, 254),
    RGB(0, 154, 253)
  );
  color: white;
  font-weight: bold;
  font-family: Comic Sans MS;
  border: 2px solid RGB(0, 118, 254);
  border-radius: 20px;
  box-shadow: 0px 0px 20px RGB(0, 154, 253);
  transition: box-shadow 1.3s;
  width: 20rem;
}

.login-box .login-btn:hover {
  background-image: linear-gradient(
    to left,
    RGB(0, 118, 254),
    RGB(0, 154, 253)
  );
  box-shadow: 0px 0px 5px RGB(0, 154, 253);
  transition: box-shadow 0.3s;
  animation: move 1s ease infinite;
}

@keyframes move {
  from {
    box-shadow: 0px 0px 5px RGB(0, 154, 253);
  }
  50% {
    box-shadow: 0px 0px 20px RGB(0, 154, 253);
  }
  to {
    box-shadow: 0px 0px 5px RGB(0, 154, 253);
  }
}
</style>

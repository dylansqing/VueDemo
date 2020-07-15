<template>
  <div class="main">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/center" tag="span">
              <span>处理中心</span>
            </router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">工作台</template>
            <el-menu-item index="2-1">
              <router-link to="/home" tag="span">Home</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/about" tag="span">About</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/manage" tag="span"
                ><span>点位管理</span></router-link
              >
            </el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">其他</template>
              <el-menu-item index="2-4-1">
                <router-link to="/addmarker" tag="span">客户录入</router-link>
              </el-menu-item>
              <el-menu-item index="2-4-2"
                ><router-link to="/todo" tag="span"
                  >Todo</router-link
                ></el-menu-item
              >
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <router-link to="/message" tag="span"
              >消息中心</router-link
            ></el-menu-item
          >
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(e) {
      console.log(e);
    }
  }
};
</script>

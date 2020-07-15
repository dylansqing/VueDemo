<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-07-01 20:00:39
 * @LastEditors: dylan
 * @LastEditTime: 2020-07-06 16:50:59
-->
<template>
  <div class="box">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <span>客户录入</span>
      </div>
      <!-- card body -->
      <div class="card-body">
        <el-row>
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="4"
                ><span><p>上传图片</p></span>
              </el-col>
              <el-col :span="12">
                <el-upload>
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="4"
                ><span><p>公司名称</p> </span>
              </el-col>
              <el-col :span="14"
                ><el-input v-model="name" placeholder="..."></el-input
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="4"
                ><span><p>备注</p></span>
              </el-col>
              <el-col :span="14"
                ><el-input v-model="tips" placeholder="..."></el-input
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="4"
                ><span><p>负责人</p></span>
              </el-col>
              <el-col :span="6"
                ><el-input v-model="owner" placeholder="..."></el-input
              ></el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="4"
                ><span><p>所属行业</p></span>
              </el-col>
              <el-col :span="20"
                ><div class="block">
                  <el-cascader
                    v-model="value"
                    :options="industry"
                    @change="handleChange"
                  ></el-cascader></div
              ></el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="4"
                ><span><p>经度</p></span>
              </el-col>
              <el-col :span="6"
                ><el-input v-model="clicked.lng" placeholder="..."></el-input
              ></el-col>
              <el-col :span="2"
                ><span><p>纬度</p></span></el-col
              >
              <el-col :span="6"
                ><el-input v-model="clicked.lat" placeholder="..."></el-input
              ></el-col>
            </el-row>
            <div>
              <el-row>
                <el-col :span="12"
                  ><p>
                    <el-button type="primary" @click="createCustomer"
                      >新建</el-button
                    >
                  </p></el-col
                >
              </el-row>
            </div></el-col
          >
          <el-col :span="12">
            <baidu-map
              class="bm-view"
              :center="mapCenter"
              :zoom="zoom"
              @click="getClickInfo"
              @zoomend="syncCenterAndZoom"
            >
              <!-- <bm-marker
                v-for="item in init.markerPosition"
                :position="item"
                :dragging="true"
                :key="item"
                animation="BMAP_ANIMATION_BOUNCE"
              >
                <bm-label
                  content="XXXXX"
                  :labelStyle="{ color: '#1565C0', fontSize: '14px' }"
                  :offset="{ width: -35, height: 30 }"
                />
              </bm-marker> -->
            </baidu-map>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
import BaiduMap from "vue-baidu-map";

Vue.use(BaiduMap, {
  ak: process.env.VUE_APP_MAP_AK
});

export default {
  data() {
    return {
      mapCenter: { lng: 104.073661, lat: 30.625394 },
      zoom: 15,
      name: "",
      tips: "",
      owner: "",
      lng: "",
      lat: "",
      industry: {
        value: "T001",
        label: "市政",
        children: [
          { value: "T001C001", label: "污水" },
          { value: "T001C002", label: "供热" }
        ]
      },
      clicked: {
        lng: "",
        lat: ""
      }
    };
  },
  methods: {
    async createCustomer() {
      let e = await this.$axios.post(
        `${process.env.VUE_APP_EXPRESS_URL}/customer/create`,
        {
          name: this.name,
          tips: this.tips,
          owner: this.owner,
          lng: this.lng,
          lat: this.lat
        }
      );
      console.log(e);
    },
    async getClickInfo(e) {
      this.clicked.lng = e.point.lng;
      this.clicked.lat = e.point.lat;
    },
    async syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      this.clicked.lng = lng;
      this.clicked.lat = lat;
      this.zoom = e.target.getZoom();
    }
  },
  mounted() {
    // console.log(process.env.VUE_APP_EXPRESS_URL)
  }
};
</script>

<style>
.box {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.el-row {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.card-body .el-col {
  font-size: 16px;
}

.el-col p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .bm-view {
  width: 100%;
  height: 50vh;
}

.anchorBL {
  display: none;
}
</style>

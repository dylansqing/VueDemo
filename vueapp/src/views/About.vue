<!--
 * @Descripttion: 
 * @version: 
 * @Author: dylan
 * @Date: 2020-06-17 12:32:18
 * @LastEditors: dylan
 * @LastEditTime: 2020-07-10 12:59:44
-->
<template>
  <div class="map">
    <el-card shadow="always">
      <baidu-map class="bm-view" :center="init.mapCenter" :zoom="15">
        <bm-marker
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
        </bm-marker>
      </baidu-map>
    </el-card>
  </div>
</template>

<script>
import Vue from "vue";
import BaiduMap from "vue-baidu-map";

Vue.use(BaiduMap, {
  ak: "dNkB9KryKayiE7zG7u8srTyM"
});

export default {
  data() {
    return {
      init: {
        mapCenter: { lng: 116.404, lat: 39.915 },
        markerPosition: [
          { lng: 116.404, lat: 39.915 },
          { lng: 116.414, lat: 39.915 }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.map {
  margin: 0;
  padding: 0;
}

.bm-view {
  height: 85vh;
  width: 100%;
}
</style>

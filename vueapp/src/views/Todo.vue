<template>
  <div class="todo-box">
    <div>
      <el-row :gutter="20">
        <el-col :span="4"
          ><el-select v-model="singledata.target" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> </el-select
        ></el-col>
        <el-col :span="6"
          ><el-input v-model="singledata.label" placeholder=""></el-input
        ></el-col>
        <el-col :span="6"
          ><el-button type="primary" @click="addNewThings">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <hr />
    <el-table :data="data" border stripe>
      <el-table-column
        prop="target"
        key="01"
        label="类别"
        width="200px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="label"
        key="02"
        label="内容"
        width="auto"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      singledata: {
        label: "",
        target: ""
      },
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        },
        {
          value: "北京烤鸭",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    addNewThings() {
      this.data.push({
        label: this.singledata.label,
        target: this.singledata.target
      });
    }
  }
};
</script>

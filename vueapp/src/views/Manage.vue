<template>
  <div class="manage-box">
    <el-table :data="tableData" border stripe>
      <!-- <el-table-column prop="_id" label="ID" width="auto"> </el-table-column> -->
      <el-table-column prop="name" label="公司名称" width="auto" align="center">
      </el-table-column>
      <el-table-column prop="tips" label="备注" width="auto" align="center">
      </el-table-column>
      <el-table-column
        prop="owner"
        label="负责人"
        width="auto"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" width="auto" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="success" size="small"
            >查看</el-button
          >
          <el-button type="warning" size="small" @click="showDialog(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="dl">
      <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
        <span>
          <el-row>
            <el-col :span="3" :offset="3">公司名称</el-col>
            <el-col :span="18">
              <el-input v-model="temData.name"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" :offset="3">备注</el-col>
            <el-col :span="18">
              <el-input v-model="temData.tips"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" :offset="3">经度</el-col>
            <el-col :span="18">
              <el-input v-model="temData.lng"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" :offset="3">纬度</el-col>
            <el-col :span="18">
              <el-input v-model="temData.lat"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" :offset="3">负责人</el-col>
            <el-col :span="18">
              <el-input v-model="temData.owner"></el-input>
            </el-col>
          </el-row>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeInfo">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
//:before-close="handleClose"
export default {
  data() {
    return {
      dialogVisible: false,
      tableRefish: {},
      tableData: [
        {
          _id: "",
          name: "",
          lng: "",
          lat: "",
          tips: ""
        }
      ],
      temData: {
        _id: "",
        name: "",
        lng: "",
        lat: "",
        tips: ""
      }
    };
  },
  methods: {
    //查找所有成员
    async findall() {
      let e = await this.$axios.get(
        `${process.env.VUE_APP_EXPRESS_URL}/customer/findall`
      );
      this.tableData = e.data;
      // console.log(Object.keys(this.tableData[0]))
      this.tableRefish = Object.keys(this.tableData[0]);
      // console.log(this.tableRefish)
    },
    //差点变量点处理
    async handleClick(e) {
      console.log(e);
    },
    //修改处理
    async changeInfo() {
      let e = await this.$axios.put(
        `${process.env.VUE_APP_EXPRESS_URL}/customer/update`,
        this.temData
      );
      console.log(e);
    },
    //修改处理函数
    async showDialog(e) {
      this.dialogVisible = true;
      this.temData = e;
      console.log(e);
    }
  },
  mounted() {
    this.findall();
  }
};
</script>

<style>
.manage-box .dl .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
</style>

<template>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="age" label="Age" width="180"></el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <span class="grab-single" type="primary" @click="openDialog(scope.row)">View</span>
          </template>
        </el-table-column>
      </el-table>
  
      <el-dialog title="Row Details" :visible.sync="dialogVisible" width="30%">
        <p>ID: {{ selectedRow.id }}</p>
        <p>Name: {{ selectedRow.name }}</p>
        <p>Age: {{ selectedRow.age }}</p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="goToDetails">Go to Details</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
          { id: 1, name: 'John Doe', age: 25 },
          { id: 2, name: 'Jane Smith', age: 30 },
          { id: 3, name: 'Samuel Green', age: 22 },
        ],
        dialogVisible: false,
        selectedRow: {},
      };
    },
    methods: {
      openDialog(row) {
        this.selectedRow = row;
        this.dialogVisible = true;
      },
      goToDetails() {
        this.dialogVisible = false;
        this.$router.push({ name: 'Details', params: { id: this.selectedRow.id } });
      },
    },
  };
  </script>
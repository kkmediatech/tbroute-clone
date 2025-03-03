<template>
    <div>
      <h1>Details</h1>
      <p>ID: {{ row.id }}</p>
      <p>Name: {{ row.name }}</p>
      <p>Age: {{ row.age }}</p>
      <el-button type="primary" @click="$router.push('/')">Back to Home</el-button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        tableData: [
          { id: 1, name: 'John Doe', age: 25 },
          { id: 2, name: 'Jane Smith', age: 30 },
          { id: 3, name: 'Samuel Green', age: 22 },
        ],
        row: {},
      };
    },
    created() {
      this.row = this.tableData.find((item) => item.id === parseInt(this.id));
    },
  };
  </script>
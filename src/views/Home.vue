<template>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="age" label="Age" width="180"></el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <span class="grab-single" type="primary" @click="openDialog(scope.row)">แข่งขันรับงาน</span>
          </template>
        </el-table-column>
      </el-table>
  
      <el-dialog title="ยืนยันตัวตน" :visible.sync="dialogVisible" width="30%" @open="initTurnstile" @close="destroyTurnstile">
        <p>ID: {{ selectedRow.id }}</p>
        <p>Name: {{ selectedRow.name }}</p>
        <p>Age: {{ selectedRow.age }}</p>

        <!-- Cloudflare Turnstile Widget -->
        <div id="turnstile-container"></div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" :disabled="!isCaptchaSolved" @click="goToDetails">ยืนยัน</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
          { id: 1, name: 'EA1-LAK', age: 25 },
          { id: 2, name: 'EA1-AYUU', age: 30 },
          { id: 3, name: 'AYUU-NO3', age: 22 },
        ],
        dialogVisible: false,
        selectedRow: {},
        turnstileWidgetId: null, // Store the Turnstile widget ID
        isCaptchaSolved: false // Track if CAPTCHA is solved
      };
    },
    methods: {
      openDialog(row) {
        this.selectedRow = row; // Set the selected row data
        this.dialogVisible = true; // Open the dialog
      },
      initTurnstile() {
        // Load Cloudflare Turnstile script dynamically
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        // Initialize Turnstile widget after script is loaded
        script.onload = () => {
          if (window.turnstile) {
            this.turnstileWidgetId = window.turnstile.render('#turnstile-container', {
              sitekey: '0x4AAAAAAA7SN9BgICU6k8R5', // Your Cloudflare Turnstile site key
              callback: (token) => {
                this.isCaptchaSolved = true; // Enable the confirm button when CAPTCHA is solved
              }
            });
          }
        };
      },
      destroyTurnstile() {
        // Destroy the Turnstile widget when dialog is closed
        if (this.turnstileWidgetId && window.turnstile) {
          window.turnstile.remove(this.turnstileWidgetId);
          this.turnstileWidgetId = null;
          this.isCaptchaSolved = false; // Reset CAPTCHA state when dialog is closed
        }
      },
      goToDetails() {
        // Get the Turnstile response token
        if (window.turnstile) {
          const token = window.turnstile.getResponse(this.turnstileWidgetId);
          if (token) {
            alert(`Turnstile Token: ${token}`); // You can send this token to your server for verification
            this.dialogVisible = false; // Close the dialog after submission
            this.$router.push({ name: 'Details', params: { id: this.selectedRow.id } });
          } else {
            alert('Please complete the Turnstile challenge.');
          }
        }
        // this.dialogVisible = false;
        // this.$router.push({ name: 'Details', params: { id: this.selectedRow.id } });
      },
    },
  };
  </script>

<style scoped>
.grab-single {
  color: #409eff;
  cursor: pointer;
  text-decoration: underline;
}

.grab-single:hover {
  color: #66b1ff;
}
</style>
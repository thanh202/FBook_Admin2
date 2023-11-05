<template>
  <img class="logo" src="../assets/logo_Fbook.png" />
  <h1>Login</h1>

  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="login">Login</button>
    <p>
      <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        ` http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        alert("Đăng Nhập Thành Công");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "master" });
      }
      console.warn(result);
    },
  },
  //nhớ đăng nhập

  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (user) {
  //     this.$router.push({ name: "master" });
  //   }
  // },
};
</script>

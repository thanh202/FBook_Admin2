<template>
  <img class="logo" src="../assets/logo_Fbook.png" />
  <div>Sign Up</div>

  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  //npm install axios
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Sign-up done");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "master" });
      }
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
<style></style>

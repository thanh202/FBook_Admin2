<template>
  <img class="logo" src="../assets/logo_Fbook.png" />
  <div>LOGIN</div>

  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
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
};
</script>
<style>
.logo {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-bottom: 25px;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
}
</style>

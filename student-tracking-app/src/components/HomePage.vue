<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" md="6" class="mx-auto"> Merhaba </v-col>
    </v-row>
  </v-container>
</template>
<script>
import router from "../router";
export default {
  name: "HomePage",
  mounted() {
    var token = localStorage.getItem("token");
    if (!token) {
      router.push({ name: "LoginForm" });
    }
  },
};
</script>
<style scoped>
</style>
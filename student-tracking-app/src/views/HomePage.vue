<template>
  <LayoutPage>
   <v-container>
     <v-row>
       <v-col>
         <h3>Test</h3>
       </v-col>
     </v-row>
   </v-container>
  </LayoutPage>
</template>
<script>
import router from "../router";
export default {
  components: {
  },
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
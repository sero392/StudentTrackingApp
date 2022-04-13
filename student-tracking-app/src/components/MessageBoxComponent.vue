<template>
  <v-dialog  v-model="options.isOpen" width="300">
    <v-card>
      <v-card-title>{{ options.title || 'Mesaj' }}</v-card-title>
      <v-card-text>{{options.message}}</v-card-text>
      <!-- <v-card-actions>
        <v-btn  text
         color="primary"
         v-on:click="options.isOpen = false">Kapat</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "MessageBox",
  data: () => ({
    options: {
      isOpen: false,
      title: "",
      message: "",
    },
  }),
};
</script>
<style scoped>
</style>
<template>
  <v-dialog persistent v-model="isOpen" width="500">
    <v-card>
      <v-card-title>Remove</v-card-title>
      <v-card-text>Are you sure to delete?</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="$emit('closedialog')">Close</v-btn>
        <!-- <v-btn color="primary" text @click="deleteItem">Delete</v-btn>  -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'MessageBox',
  data: () => ({
    isOpen: false,
  }),
};
</script>
<style scoped>
</style>
<template>
  <v-dialog content-class="tile-dialog" v-model="options.isOpen" width="300">
    <v-card tile elevation="6">
      <v-card-title class="pa-0 px-1 blue-grey lighten-4"
        >{{ options.title || "Mesaj" }}
        <v-btn icon class="ml-auto" v-on:click="options.isOpen = false">
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-3 black--text">
        {{ options.message }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          small
          v-if="options.showCancel"
          tile
          v-on:click="cancel()"
          color="error"
          >Vazgeç</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn small tile v-on:click="ok()" color="success">Tamam</v-btn>
      </v-card-actions>
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
      showCancel: false,
    },
  }),
  methods: {
    ok: function () {
      this.options.isOpen = false;
    },
    cancel: function () {
      this.options.isOpen = false;
    },
  },
};
</script>
<style >
.tile-dialog {
  border-radius: 0px !important;
}
</style>
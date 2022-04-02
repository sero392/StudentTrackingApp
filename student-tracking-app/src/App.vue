<template>
  <v-app>
    <v-main>
      <MessageBox ref="msgBox"></MessageBox>
      <helloWorld :run="openMenu"></helloWorld>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld  from "./components/HelloWorld.vue";
export default {
  name: "App",
  methods: {
    openMenu: function () {
      var th = this;
      var dialog = th.$refs.msgBox;
      console.log(dialog);
      dialog.isOpen = true;
    },
  },
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <v-main>
      <MessageBox ref="msgBox"></MessageBox>

      <LoginForm></LoginForm>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import MessageBox  from "./components/MessageBox.vue";

export default {
  name: "App",
  methods: {
    openMenu: function (options) {
      var th = this;
      var dialog = th.$refs.msgBox;
      dialog.options = options;
    },
  },
  components: {
    LoginForm,
    MessageBox,
  },

  data: () => ({
    //
  }),
};
</script>

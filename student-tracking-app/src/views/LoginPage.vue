<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row>
          <v-col cols="12" md="6" class="mx-auto">
            <v-form ref="frmLogin">
              <v-card elevation="5">
                <v-card-title class="purple darken-1 white--text">
                  Öğrenci Takip Uygulaması
                </v-card-title>
                <v-card-text class="mt-4">
                  <v-row dense>
                    <v-col>
                      <v-text-field
                        dense
                        label="Kullanıcı Adı"
                        prepend-icon="mdi-account"
                        placeholder="Lütfen Kullanıcı Adı Giriniz."
                        v-bind:rules="rules.userName"
                        v-model="loginModel.userName"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-text-field
                        type="password"
                        dense
                        label="Şifre"
                        prepend-icon="mdi-key"
                        placeholder="Lütfen Şifre Giriniz."
                        v-bind:rules="rules.password"
                        v-model="loginModel.password"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="auto" class="ml-auto">
                      <v-btn
                        small
                        tile
                        outlined
                        color="primary"
                        class="mr-3"
                        v-on:click="login()"
                      >
                        Giriş Yap
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="auto" class="ml-auto">
                      <!-- <v-btn
                        small
                        text
                        class="text-caption text-lowercase"
                        elevation="0"
                        color="primary"
                      >
                        Şifremi Unuttum ?
                      </v-btn> -->
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
        <v-overlay v-bind:value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import router from "../router/index.js";
const axios = require("axios").default;
export default {
  name: "LoginPage",
  mounted() {
    var token = localStorage.getItem("token");
    if (token) {
      router.push({ name: "HomePage" });
    }
  },
  data: () => ({
    overlay: false,
    loginModel: {
      userName: "",
      password: "",
    },
    rules: {
      userName: [(v) => !!v || "Lütfen Kullanıcı Adı Giriniz."],
      password: [(v) => !!v || "Lütfen Şifre Giriniz."],
    },
  }),
  methods: {
    login() {
      var th = this;
      var valid = th.$refs.frmLogin.validate();
      if (!valid) {
        return;
      }
      th.overlay = true;
      axios
        .post(th.store.baseUrl + "api/User/Login", {
          userName: th.loginModel.userName,
          password: th.loginModel.password,
        })
        .then(function (response) {
          th.overlay = false;
          if (response.data.isSuccess) {
            localStorage.setItem("token", response.data.data);
            router.push({ name: "HomePage" });
          } else {
            th.$alert(response.data.statusMessage,'','error');
          }
        })
        .catch(function () {
            th.$fire({
              type:'error',
              text: 'Sistem Hatası',
              confirmButtonText:'Tamam'
            });
          th.overlay = false;
        });
    },
  },
};
</script>
<style scoped>
</style>
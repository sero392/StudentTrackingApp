<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" md="6" class="mx-auto">
        <v-form>
          <v-card>
            <v-card-title> Öğrenci Takip Uygulaması </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col>
                  <v-text-field
                    outlined
                    dense
                    label="Kullanıcı Adı"
                    placeholder="Lütfen Kullanıcı Adı Giriniz."
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  <v-text-field
                    type="password"
                    outlined
                    dense
                    label="Şifre"
                    placeholder="Lütfen Şifre Giriniz."
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-divider class="py-2"></v-divider>
              <v-row dense>
                <v-col>
                  <v-btn small tile outlined color="primary"> Giriş Yap </v-btn>
                </v-col>
                <v-col cols="auto" class="ml-auto">
                  <v-btn small tile outlined color="success"> Kayıt Ol </v-btn>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  <v-btn
                    small
                    text
                    class="text-caption text-lowercase"
                    elevation="0"
                    color="primary"
                  >
                    Şifremi Unuttum ?
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "LoginForm",
};
</script>
<style scoped>
</style>
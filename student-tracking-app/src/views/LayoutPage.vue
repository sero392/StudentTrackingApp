<template>
  <LayoutComponent appBarColor="indigo darken-2" v-bind:showLeftBar="true">
    <template v-slot:leftBar>
      <v-list>
        <v-list-item>
          <v-list-item-content class="text-center">
            <h3>Öğrenci Takip Programı</h3>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              block
              tile
              color="primary"
              elevation="5"
              v-on:click="store.clickDirect('HomePage')"
            >
              <v-icon left>mdi-home</v-icon>
              Ana Sayfa
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              block
              tile
              color="primary"
              elevation="5"
              v-on:click="store.clickDirect('StudentPage')"
            >
              Öğrenciler
            </v-btn>
          </v-list-item-content>
        </v-list-item>
              <v-list-item>
          <v-list-item-content>
            <v-btn
              block
              tile
              color="primary"
              elevation="5"
              v-on:click="logOut()"
            >
              <v-icon left>mdi-logout</v-icon>
              Çıkış
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <slot></slot>
  </LayoutComponent>
</template>
<script>
import LayoutComponent from "../components/LayoutComponent";
import router from '../router';
export default {
  name: "LayoutPage",
  components: {
    LayoutComponent,
  },

  methods: {
    logOut: function () {
      localStorage.clear();
      router.push({name : "LoginForm"});
    }
  },
  mounted: function () {},
};
</script>
<style scoped>
</style>
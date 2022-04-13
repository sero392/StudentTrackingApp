<template>
  <v-app>
    <v-app-bar app dark dense elevation="2" v-bind:color="appBarColor">
      <v-app-bar-nav-icon
        v-if="showLeftBar"
        v-on:click="isOpenLeftBar = !isOpenLeftBar"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-if="showLeftBar" v-model="isOpenLeftBar">
      <slot name="leftBar"> </slot>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
<script>
export default {
  methods: {},
  data: () => ({
    isOpenLeftBar: true,
  }),
  props: {
    appBarColor: {
      type: String,
      required: false,
      default: "#cbcbcb",
    },
    showLeftBar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  name: "LayoutComponent",
};
</script>
<style scoped>
</style>
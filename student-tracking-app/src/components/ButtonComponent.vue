<template>
  <v-btn
    tile
    small
    v-on:click="onClick()"
    v-bind:color="type == eType.Edit ? 'yellow' : type == eType.Delete ? 'red' : 'primary'">
    {{
      type == eType.Edit ? "Güncelle" : type == eType.Delete ? "Sil" : "Ekle"
    }}
    <v-icon small right>
      {{
      type == eType.Edit ? "mdi-pencil" : type == eType.Delete ? "mdi-close" : "mdi-plus"
      }}
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    onClick: { type: Function, required: false },
    type: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data: () => ({
    eType: {
      Create: 0,
      Edit: 1,
      Delete: 2,
    },
  }),
  methods: {},
};
</script>
<style>
</style>
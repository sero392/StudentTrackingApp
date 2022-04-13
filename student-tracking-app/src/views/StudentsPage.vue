<template>
  <LayoutPage>
    <v-container>
      <v-row v-if="!editMode">
        <v-col>
          <v-row>
            <v-col>
              <v-btn tile small color="primary" v-on:click="editMode = true">
                <v-icon>mdi-plus</v-icon>
                Yeni Ekle
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table
                dense
                v-bind:headers="dataTableOptions.headers"
                v-bind:items="dataTableOptions.itemList"
                class="elevation-2"
              >
              </v-data-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="editMode">
        <v-col cols="6">
          <v-row>
            <v-col>
              <v-btn tile small color="secondary" v-on:click="editMode = false">
                <v-icon>mdi-arrow-left</v-icon>
                Geri Dön
              </v-btn>
            </v-col>
          </v-row>
          <v-form class="mt-3">
            <v-card
              tile
              elevation="5"
              v-bind:loading="loading"
              v-bind:disabled="loading"
            >
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      label="Ad"
                      placeholder="Lütfen Öğrenci Adı Giriniz."
                      v-model="editItem.name"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      label="Soyad"
                      placeholder="Lütfen Soyad Giriniz."
                      v-model="editItem.surName"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      label="Veli Adı"
                      placeholder="Lütfen Veli Adı Giriniz."
                      v-model="editItem.parentName"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      prepend-icon="mdi-mail"
                      label="Mail"
                      placeholder="Lütfen Mail Adresi Giriniz."
                      v-model="editItem.mail"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      prepend-icon="mdi-phone"
                      label="Telefon"
                      placeholder="Lütfen Telefon Numarası Giriniz."
                      v-model="editItem.parentPhoneNumber"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-btn tile small color="primary" v-on:click="addStudent()">
                      Ekle
                      <v-icon right>mdi-check</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </LayoutPage>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    loading:false,
    editItem: {},
    editMode: false,
    dataTableOptions: {
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: true,
          value: "studentId",
        },
        {
          text: "İsim",
          align: "left",
          sortable: false,
          value: "name",
        },
        {
          text: "Soy İsim",
          align: "left",
          sortable: false,
          value: "surname",
        },
        {
          text: "Mail Adresi",
          align: "left",
          sortable: false,
          value: "mail",
        },
        {
          text: "Veli Adı",
          align: "left",
          sortable: false,
          value: "parentName",
        },
        {
          text: "Veli Telefonu",
          align: "left",
          sortable: false,
          value: "parentPhoneNumber",
        },
      ],
      itemList: [],
    },
  }),
  computed: {
    tokenConfig: function () {
      var token = localStorage.getItem("token");
      return {
        headers : { Authorization: `Bearer ${token}` },
      }
    },
  },
  methods: {
    addStudent: function () {
      var th = this;
      th.loading = true;
      var url = `${th.store.baseUrl}api/Student/AddStudent`;
      
      axios
      .post(url,th.editItem,th.tokenConfig)
      .then(function ({data}) {
        if (data.isSuccess) {
          th.loading = false;
          th.editMode = false;
        }
      })
      .catch(function (err) {
        console.log(err);
      })

    },
  },
  beforeMount: function () {
    var th = this;
    axios
      .get(`${th.store.baseUrl}api/Student/GetStudents`, th.tokenConfig)
      .then(function ({ data }) {
        if (data.isSuccess) {
          th.dataTableOptions.itemList = data.data;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
<style scoped>
</style>
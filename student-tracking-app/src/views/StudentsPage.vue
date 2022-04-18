<template>
  <LayoutPage>
    <v-container>
      <v-row v-if="!editMode">
        <v-col>
          <v-row>
            <v-col>
              <v-data-table
                dense
                v-bind:loading="loading"
                v-bind:headers="dataTableOptions.headers"
                v-bind:items="dataTableOptions.itemList"
                v-bind:search="dataTableOptions.search"
                class="elevation-2"
              >
                <template v-slot:top>
                  <v-toolbar color="blue-grey darken-4" dense elevation="0">
                    <v-btn tile small color="primary" v-on:click="newStudent()">
                      <v-icon>mdi-plus</v-icon>
                      Yeni Ekle
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-sheet max-width="250">
                      <v-text-field
                        dense
                        flat
                        solo
                        hide-details
                        v-model="dataTableOptions.search"
                        label="Ara.."
                        append-icon="mdi-table-search"
                        placeholder="Lütfen Değer Giriniz.."
                      >
                      </v-text-field>
                    </v-sheet>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.fldGender`]="{ item }">
                  {{ item.gender == 1 ? "Erkek" : "Kadın" }}
                </template>
                <template v-slot:[`item.fldDelete`]="{ item }">
                  <ButtonComponent
                    v-bind:type="2"
                    v-bind:onClick="() => deleteStudent(item)"
                  >
                  </ButtonComponent>
                </template>
                <template v-slot:[`item.fldEdit`]="{ item }">
                  <ButtonComponent
                    v-bind:type="1"
                    v-bind:onClick="() => editStudent(item)"
                  >
                  </ButtonComponent>
                </template>
                <template v-slot:[`item.fldSms`]>
                  <v-btn color="purple" dark tile small> SMS Gönder </v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="editMode">
        <v-col cols="12" lg="6">
          <v-row>
            <v-col>
              <v-btn tile small color="secondary" v-on:click="editMode = false">
                <v-icon>mdi-arrow-left</v-icon>
                Geri Dön
              </v-btn>
            </v-col>
          </v-row>
          <v-form class="mt-3" ref="frmStudent">
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
                      v-bind:rules="inputRules"
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
                      v-model="editItem.surname"
                      v-bind:rules="inputRules"
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
                      v-bind:rules="inputRules"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-combobox
                      dense
                      label="Cinsiyet"
                      placeholder="Lütfen Cinsiyet Seçiniz."
                      v-bind:items="genderList"
                      v-model="genderSelectedItem"
                      v-bind:rules="inputRules"
                    >
                    </v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-combobox
                      dense
                      label="Sınıf"
                      placeholder="Lütfen Sınıf Seçiniz."
                      v-bind:items="gradeList"
                      v-model="gradeSelectedItem"
                      v-bind:rules="inputRules"
                    >
                    </v-combobox>
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
                      v-bind:rules="inputRules"
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
                      placeholder="Lütfen telefon numarası başında 0 olmadan 10 haneli giriniz."
                      type="number"
                      v-model="editItem.parentPhoneNumber"
                      v-bind:rules="phoneRule"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <ButtonComponent
                      v-bind:type="operateType"
                      v-bind:onClick="() => addStudent()"
                    >
                    </ButtonComponent>
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
import router from "../router";
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  components: { ButtonComponent },
  data: () => ({
    operateType: 0,
    loading: false,
    editItem: {},
    editMode: false,
    phoneRule: [
      (v) => !!v || "Lütfen Boş Geçmeyiniz.",
      (v) => (v && v.length < 11) || "Telefon numarası 10 haneyi geçemez.",
    ],
    inputRules: [
      function (v) {
        return !!v || "Lütfen Boş Geçmeyiniz.";
      },
    ],
    genderSelectedItem: "",
    gradeSelectedItem: "",
    genderList: [
      {
        text: "Erkek",
        value: 1,
      },
      {
        text: "Kadın",
        value: 0,
      },
    ],
    gradeList: [
      {
        text: "1.sınıf",
        value: 1,
      },
      {
        text: "2.sınıf",
        value: 2,
      },
      {
        text: "3.sınıf",
        value: 3,
      },
      {
        text: "4.sınıf",
        value: 4,
      },
      {
        text: "5.sınıf",
        value: 5,
      },
    ],
    dataTableOptions: {
      search: "",
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
        {
          text: "Cinsiyet",
          align: "left",
          sortable: false,
          value: "fldGender",
        },
        {
          text: "Sınıfı",
          align: "left",
          sortable: false,
          value: "grade",
        },
        {
          text: "Sil",
          align: "left",
          sortable: false,
          value: "fldDelete",
        },
        {
          text: "Güncelle",
          align: "left",
          sortable: false,
          value: "fldEdit",
        },
        {
          text: "Devamsızlık",
          align: "left",
          sortable: false,
          value: "fldSms",
        },
      ],
      itemList: [],
    },
  }),
  computed: {
    tokenConfig: function () {
      var token = localStorage.getItem("token");
      return {
        headers: { Authorization: `Bearer ${token}` },
      };
    },
  },
  methods: {
    editStudent: function (item) {
      var th = this;
      th.operateType = 1;
      th.editMode = true;
      Object.assign(th.editItem, item);
      var gender = th.genderList.find((f) => f.value == item.gender);
      var grade = th.gradeList.find((f) => f.value == item.grade);
      th.genderSelectedItem = gender;
      th.gradeSelectedItem = grade;
    },
    newStudent: function () {
      var th = this;
      /* eslint-disable no-debugger */
      // debugger;
      /* eslint-enable no-debugger */
      th.operateType = 0;
      th.editMode = true;
      th.gradeSelectedItem = "";
      th.genderSelectedItem = "";
      th.editItem = {};
    },
    addStudent: function () {
      var th = this;

      var valid = th.$refs.frmStudent.validate();
      if (!valid) {
        return;
      }
      th.loading = true;
      th.editItem.grade = th.gradeSelectedItem.value;
      th.editItem.gender = th.genderSelectedItem.value;
      var url = `${th.store.baseUrl}api/Student/AddStudent`;
      if (th.editItem.studentId || th.editItem.studentId > 0) {
        url = `${th.store.baseUrl}api/Student/UpdateStudent`;
      }
      axios
        .post(url, th.editItem, th.tokenConfig)
        .then(function ({ data }) {
          if (data.isSuccess) {
            th.getStudents();
            th.loading = false;
            th.editMode = false;
          }
        })
        .catch(function ({ response }) {
          th.loading = false;
          if (response.data.status == 400) {
             th.$fire({
              type:'error',
              text: 'Kayıt edilirken hata oluştu lütfen değerleri kontrol ediniz.',
              confirmButtonText:'Tamam'
            });
          }
        });
    },
    getStudents: function () {
      var th = this;
      th.loading = true;
      axios
        .get(`${th.store.baseUrl}api/Student/GetStudents`, th.tokenConfig)
        .then(function ({ data }) {
          th.loading = false;
          if (data.isSuccess && data.data != null) {
            th.dataTableOptions.itemList = data.data;
          } else {
            th.dataTableOptions.itemList = [];
          }
        })
        .catch(function ({ response }) {
          th.loading = false;
          if (!response) {
            localStorage.clear();
            router.push({ name: "LoginForm" });
          }
        });
    },
    deleteStudent: function (item) {
      var th = this;
      th.$confirm("Silmek istediğinize emin misiniz?",'','',{
        confirmButtonText:'Tamam',
        cancelButtonText:'Vazgeç'
      }).then(() => {
          axios
          .post(
            th.store.baseUrl + "api/Student/DeleteStudent/" + item.studentId,
            {},
            th.tokenConfig
          )
          .then(function ({ data }) {
            if (data.isSuccess) {
              th.getStudents();
              th.$alert(data.statusMessage);
            }
          });
      });
   
    },
  },
  beforeMount: function () {
    var th = this;
    console.clear();
    th.getStudents();
  },
};
</script>
<style scoped>
</style>
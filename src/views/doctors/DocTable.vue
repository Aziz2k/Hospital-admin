<template>
  <div>
    <div class="container">
      <div class="title">Врачи</div>
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="doctors" :items-per-page="5" class="elevation-1">
            <template v-slot:item.btns="{ item }">
              <div class="text-right">
                <router-link :to="{name: 'ViewDocs',params: {id:item.id}}">
                  <v-icon @click="show(item.id)" color="success">mdi-eye</v-icon>
                </router-link>
                <v-icon @click="edit(item)" class="ml-2">mdi-pencil</v-icon>
                <v-icon @click="del(item.id)" color="error" class="ml-2">mdi-delete</v-icon>
              </div>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Регистрация сотрудника</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные сотрудника</span>
        </v-card-title>
        <div class="dialogcount">1</div>
        <div class="subtitle-1 text-center">Личные данные</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.name" solo placeholder="И.Ф.О."></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.date" solo placeholder="Дата рождения" type="text"
                  onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="place" label="Место рождение" v-model="docs.place" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.address" solo placeholder="Место проживание"></v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="matstatus" label="Cемейное положение" v-model="docs.matstatus" solo></v-select>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="eduitems" label="Образование" v-model="docs.edu" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.phone" solo placeholder="Номер телефона" type="number">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.phone2" solo placeholder="Номер родный"
                  type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog = false, close()">
            Отмена
          </button>
          <button class="btn next" text @click="dialog = false, dialog1 = !dialog1">
            Далее
          </button>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Регистрация сотрудника</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные сотрудника</span>
        </v-card-title>
        <div class="dialogcount">2</div>
        <div class="subtitle-1 text-center">Сведении о специальности</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="specitem" label="Специальность" v-model="docs.spec" solo></v-select>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="depar" label="Отдел" v-model="docs.depar" solo>
                </v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.staj" solo placeholder="Стаж работы"></v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="workTime" label="График работы" v-model="docs.workTime" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="docs.week"
                  solo
                  :items="weeks"
                  label="Рабочии дни"
                  multiple
                  chips
                  class="border-radius"
                  persistent-hint
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.regisdate" solo placeholder="Дата регистрации" type="text" onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog1 = false, close()">
            Отмена
          </button>
          <button class="btn next" text @click="dialog1 = false, dialog2 = !dialog2">
            Далее
          </button>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Регистрация сотрудника</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные сотрудника</span>
        </v-card-title>
        <div class="dialogcount">3</div>
        <div class="subtitle-1 text-center">Опыт работы</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.workStart" solo placeholder="Начало"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.workEnd" solo placeholder="Окончания"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="post" label="Должность" v-model="docs.post" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="docs.workAddress" solo placeholder="Адресс преждней работы">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea class="border-radius" solo name="input-7-4" label="Допольнительно" v-model="docs.desc">
                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog2 = false, close()">
            Отмена
          </button>
          <button class="btn next" v-show="!isShow" text @click="dialog2 = false, add()">
            Закончить
          </button>
          <button class="btn next" v-show="isShow" text @click="dialog2 = false, save()">
            Сохранить
          </button>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import { eventEmitter } from '../../main'
  export default {
    props: ['doctor'],
    data:()=>({
      headers: [{text: 'Имя', value: 'name'},
        {text: 'Дата рождения', value: 'date'},
        {text: 'Отдел', value: 'depar'},
        {text: 'Время приема', value: 'workTime'},
        {text: 'Рабочии дни', value: 'week'},
        {text: '', value: 'btns'},
      ],
      dialog: false,
      dialog1: false,
      dialog2: false,
      isShow:false,
      docs: {

      },
      place: ['Андижан', 'Фергана', 'Наманган', 'Ташкент', 'Самарканд', 'Бухара', 'Navoiy', 'Хорезм',
        'Кашкадарья', 'Сурхандарья'
      ],
      matstatus:['Замужем', 'Не замужем', 'Женат', 'Не женат'],
      eduitems:['Среднее','Бакалавр', 'Магистратура'],
      specitem: ['Хирург', 'Медсестра', 'Глазной врач', 'ЛОР'],
      depar: ['Хирург', 'Медсестра', 'Глазной врач', 'ЛОР'],
      workTime: ['09:00-16:00', '08:00-14:00','12:00-18:00'],
      weeks: ['Каждый день','Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота','Воскресенье'],
      post: ['Глав Врач', 'Врач', 'Фельдшер', 'Медсестра'],
    }),
    methods:{
      close(){
        this.docs = {}
        this.isShow = false
      },
      show(id){
        this.$store.getters.showDoctor(id)
      },
      add() {
        this.$store.dispatch('addNewDoc', this.docs)
        this.hodim = { }
      },
      edit(item) {
        this.docs = item
        this.dialog = true
        this.isShow = true
      },
      del(id){
          this.$store.dispatch('delDoc',id)
      },
      save() {
        this.isShow = false
        axios.put('http://localhost:3000/doctors/' + this.docs.id, this.docs)
          .then(response => {
            this.doctors.forEach(cat => {
              if (cat.id == response.data.id) {
                cat = response.data
              }
            })
          })
        this.docs = {}
      }
    },
    computed:{
      doctors(){
        return this.$store.getters.doctors
      }
    },
    created() {
      eventEmitter.$on('show1', ()=>{
        this.dialog = true
      })
      this.$store.dispatch('allGetDocs')
    }
  }
</script>

<style>
</style>
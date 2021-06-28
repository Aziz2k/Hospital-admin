<template>
  <div>
    <div class="container">
      <div class="title">Пациенты</div>
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="patients" :items-per-page="5" class="elevation-1">
            <template v-slot:item.btns="{ item }">
                <router-link :to="{name: 'ViewPatients',params: {id:item.id}}">
                  <v-icon @click="show(item.id)" color="success">mdi-eye</v-icon>
                </router-link>
                <v-icon @click="edit(item)" class="ml-2">mdi-pencil</v-icon>
                <v-icon @click="del(item.id)" color="error" class="ml-2">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Регистрация пациента</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные пациента</span>
        </v-card-title>
        <div class="dialogcount">1</div>
        <div class="subtitle-1 text-center">Личные данные</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.name" solo label="И.Ф.О."></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.year" solo label="Дата рождение" type="text"
                onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="place" label="Место рождение" v-model="patient.place" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.address" solo label="Место проживание"></v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="matstatus" label="Cемейное положение" v-model="patient.matstatus" solo></v-select>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="eduitems" label="Образование" v-model="patient.edu" solo></v-select>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="workitem" label="Состояние" v-model="patient.work" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.workAddress" solo label="Место работы"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.phone" solo label="Номер телефона" type="number">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.phone2" solo label="Номер родных"
                type="number">
                  </v-text-field>
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
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Мед данные</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные пациента</span>
        </v-card-title>
        <div class="dialogcount">2</div>
        <div class="subtitle-1 text-center">Мед данные</div>
        <v-card-text>
          <v-container>
            <v-row style="font-size:10px">
              <v-col class="d-flex border-radius" cols="12" sm="3">
                <v-select class="border-radius" :items="blood " label="Группа крови" v-model="patient.blood " solo></v-select>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="3">
                <v-select class="border-radius" :items="faktor" label="Фактор" v-model="patient.faktor" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.insurance" solo label="Страховка"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.insuranceFirm" solo label="Фирма страховки">
                </v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-text-field class="border-radius"
                label="Тип льготы" v-model="patient.lgotoType" solo>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.lgoto" solo label="Льгота">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.lgotoDate" solo placeholder="Дата получение льготы"
                  type="text" onfocus="(this.type='date')"></v-text-field>
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
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Мед данные</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные пациента</span>
        </v-card-title>
        <div class="dialogcount">3</div>
        <div class="subtitle-1 text-center">Данные приема</div>
        <v-card-text>
          <v-container>
            <v-row style="font-size:11px">
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.regisdate" solo placeholder="Дата приема" type="text" onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.reldate" solo placeholder="Дата выписки" type="text" onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="depart" label="Отделение" v-model="patient.depart" solo>
                </v-select>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-select class="border-radius" :items="docsFiltName" label="Ответственный врач" v-model="patient.responDocs" solo>
                </v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.weight" solo label="Вес"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.height" solo label="Рост"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog2 = false, close()">
            Отмена
          </button>
          <button class="btn next" text @click="dialog2 = false, dialog3 = !dialog3">
            Далее
          </button>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog3" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold text-aligh" v-show="!isShow">Регистрация пациента</span>
          <span class="headline font-weight-bold text-aligh" v-show="isShow">Изменить данные пациента</span>
        </v-card-title>
        <div class="dialogcount">4</div>
        <div class="subtitle-1 text-center">История болезни</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.treatmentDate" solo placeholder="Дата лечение"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col class="d-flex border-radius" cols="12" sm="6">
                <v-text-field class="border-radius"  label="Вид болезни" v-model="patient.oldDisease" solo></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.oldDoc" solo label="И.Ф.О. врача">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="border-radius" v-model="patient.hosAddress" solo
                  label="Адрес больницы"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea class="border-radius" solo  label="Диагноз" v-model="patient.diagnoz"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog3 = false, close()">
            Отмена
          </button>
          <button class="btn next" v-show="!isShow" text @click="dialog3 = false, add()">
            Закончить
          </button>
          <button class="btn next" v-show="isShow" text @click="dialog3 = false, save()">
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
    props:['pats'],
    data: () => ({
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      isShow: false,
      patient: {},
      headers: [{text: 'Имя', value: 'name'},
        {text: 'Дата рождения', value: 'year'},
        {text: 'Дата приема', value: 'regisdate'},
        {text: 'Дата выписки', value: 'reldate'},
        {text: 'Врач', value: 'doctor'},
        {text: 'Причина', value: 'oldDisease'},
        {text: '', value: 'btns'},
      ],
      place: ['Андижан', 'Фергана', 'Наманган', 'Ташкент', 'Самарканд', 'Бухара', 'Navoiy', 'Хорезм',
        'Кашкадарья', 'Сурхандарья'
      ],
      matstatus:['Замужем', 'Не замужем', 'Женат', 'Не женат'],
      eduitems:['Без образование','Среднее', 'Высшее'],
      workitem:['Работает', 'Не работает', 'Пенсионер'],
      blood: ['I', 'II', 'III', 'IV'],
      faktor: ['+', '2', '3', '4'],
      depart: ['Хирургический корпус','Клиническое отделение','Травмпункт','Терапевтический корпус','Санитарный пропускник']
    }),
    computed:{
      patients(){
        return this.$store.getters.patients
      },
      docsFiltName(){
        return this.$store.getters.docFiltName
      }
    },
    methods:{
      add() {
        this.$store.dispatch('addNewPatient', this.patient)
        this.patient = {}
      },
      close() {
        this.isShow = false
        this.patient = {}
      },
      show(id){
        this.$store.getters.showPatient(id)
      },
      edit(item) {
        this.patient = item
        this.dialog = true
        this.isShow = true
      },
      del(id){
          this.$store.dispatch('delPatient',id)
      },
      save() {
        this.isShow = false
        axios.put('http://localhost:3000/patients/' + this.patient.id, this.patient)
          .then(response => {
            this.patients.forEach(pat => {
              if (pat.id == response.data.id) {
                pat = response.data
              }
            })
          })
        this.patient = {}
      }
    },
    created() {
      eventEmitter.$on('show', ()=>{
        this.dialog = true
      }),
      this.$store.dispatch('allGetPatient')
    }
  }
</script>

<style>
</style>
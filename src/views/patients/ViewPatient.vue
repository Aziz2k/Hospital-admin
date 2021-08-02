<template>
  <div class="container">
    <div class="views">
      <div class="patient">
        <div class="box">
          <v-row>
            <v-col cols="12">
              <div class="big__title">
                <div class="title">{{view.name}}</div>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Дата приема:</div>
            </v-col>
            <v-col cols="2">
              <div class="desc">{{view.regisdate}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Дата выписки:</div>
            </v-col>
            <v-col cols="6">
              <div class="desc">{{view.reldate}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Отделение:</div>
            </v-col>
            <v-col cols="2">
              <div class="desc">{{view.depart}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Ответственный врач:</div>
            </v-col>
            <v-col cols="6">
              <div class="desc">{{view.responDocs}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Причина:</div>
            </v-col>
            <v-col cols="10">
              <div class="desc">{{view.diagnoz}}</div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="local">
        <v-row>
            <v-col cols="12">
              <div class="title">Личные данные</div>
            </v-col>
          <v-col cols="2">
            <div class="subtitle">Дата рождение:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.year}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Cемейное положение:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.matstatus}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Номер телефона:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">+{{view.phone}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Место рождение:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.place}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Образование:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.edu}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Номер родных:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">+{{view.phone2}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Место проживание:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.address}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Место работы:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.workAddress}}</div>
          </v-col>
        </v-row>
      </div>
      <div class="medicine">
        <v-row>
            <v-col cols="12">
              <div class="title">Мед данные</div>
            </v-col>
          <v-col cols="2">
            <div class="subtitle">Группа крови:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.blood}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Тип льготы</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.lgotoType}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Фактор:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.faktor}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Льгота:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.lgoto}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Вес</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.weight}} кг</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Страховка:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.insurance}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Дата получение льготы:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.lgotoDate}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Рост:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.height}} sm</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Фирма страховки:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.insuranceFirm}}</div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      view() {
        return this.$store.getters.viewPatient
      }
    }
  }
</script>

<style scoped>
  .container{
    border-radius:8px; 
    overflow:hidden; 
    background:#fff; 
    padding: 0; 
    margin:10px;
    margin-top:25px;
  }
  .row {
    align-items: center;
  }

  .local {
    border-bottom: 1px solid #BDBDBD;
  }
  .box, .local, .medicine {
    padding: 20px;
  }
  .box {
    padding-bottom: 0;
  }
  .box .title {
    color: #25282B;
    font-size: 26px;
    font-weight: bold;
  }

  .subtitle {
    font-size: 14px;
    line-height: 17px;
    color: #606060;
  }

  .desc {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
  
</style>
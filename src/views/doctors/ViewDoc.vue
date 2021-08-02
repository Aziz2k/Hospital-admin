<template>
  <div class="container" style="border-radius:8px; overflow:hidden; background:#fff; padding: 0; margin:10px;margin-top:25px;">
    <div class="views">
      <div class="doctor">
        <div class="box">
          <v-row>
            <v-col cols="12">
              <div class="big__title">
                <div class="title">{{view.name}}</div>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Специальность</div>
            </v-col>
            <v-col cols="2">
              <div class="desc">{{view.spec}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Дата регистрации  :</div>
            </v-col>
            <v-col cols="6">
              <div class="desc">{{view.regisdate}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Отделение:</div>
            </v-col>
            <v-col cols="2">
              <div class="desc">{{view.depar}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">График работы:</div>
            </v-col>
            <v-col cols="6">
              <div class="desc">{{view.workTime}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Стаж:</div>
            </v-col>
            <v-col cols="2">
              <div class="desc">{{view.staj}}</div>
            </v-col>
            <v-col cols="2">
              <div class="subtitle">Рабочии дни:</div>
            </v-col>
            <v-col cols="6">
              <div class="desc">{{view.week.join( )}}</div>
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
            <div class="desc">{{view.date}}</div>
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
        </v-row>
      </div>
      <div class="medicine">
        <v-row>
            <v-col cols="12">
              <div class="title">Опыт работы</div>
            </v-col>
          <v-col cols="2">
            <div class="subtitle">Начало:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.workStart}}</div>
          </v-col>
          <v-col cols="2">  
            <div class="subtitle">Окончания:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.workEnd}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Должность:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.post}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Адресс преждней работы:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.workAddress}}</div>
          </v-col>
          <v-col cols="2">
            <div class="subtitle">Допольнительно:</div>
          </v-col>
          <v-col cols="2">
            <div class="desc">{{view.desc}}</div>
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
        return this.$store.getters.viewDoctor
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
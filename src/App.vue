<template>
  <v-app>
    <Menu />
    <v-main>
      <v-main style="padding: 10px; background: #F6F8FB; min-height:100vh">
        <div class="container">
          <div class="head">
              <div class="search">
                <v-icon class="pr-2">mdi-magnify</v-icon>
                <input type="text" placeholder="Поиск" v-model="search" @input="getSearch()">
              </div>
              <div class="right">
                <span class="mr-5 alarm"><img src="./assets/img/alarm.png" alt=""><span class="count">9</span></span>
                <img src="./assets/img/ava2.png" alt="">
              </div>
            </div>
        </div>
        <router-view/>
      </v-main>
    </v-main>
  </v-app>
</template>

<script>
  import Menu from './views/Menu'

export default {
  name: 'App',
  data:()=> ({
    search:''
  }),
  components: {
    Menu
  },
  methods: {
    getSearch(){
      this.$store.getters.getSearch(this.search)
    },
    searchInp(){
      this.$store.getters.getSearch
    }
    
  },
}
</script>
<style>

</style>
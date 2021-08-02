<template>
  <div>
    <v-app>
      <v-main style="padding: 10px; background: #F6F8FB;">
          <div class="add">
            <button>
              <v-icon style="color: #fff" @click="dialog = !dialog, show1()">mdi-account-plus-outline</v-icon>
            </button>
          </div>
        <DocTable :doctor='doctors'/>
      </v-main>
    </v-app>
  </div>
</template>


<script>
import DocTable from './DocTable.vue'
import { eventEmitter } from '../../main'
  export default {
    data: ()=> ({
      dialog: false
    }),
    methods: {
      show1(){
        eventEmitter.$emit('show1')
      }
    },
    components:{
      DocTable
    },
    computed: {
      doctors(){
        return this.$store.getters.doctors
      }
    }
  }
</script>

<style>
</style>
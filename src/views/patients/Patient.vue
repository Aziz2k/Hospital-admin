<template>
  <div>
    <v-app>
      <v-main style="padding: 10px; background: #F6F8FB;">
          <div class="add">
            <button>
              <v-icon style="color: #fff" @click="dialog = !dialog,show()">mdi-account-plus-outline</v-icon>
            </button>
          </div>
        <PatientTable :pats='patients'/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { eventEmitter } from '../../main'
  import PatientTable from './PatientTable'
  export default {
    data: ()=> ({
      dialog: false
    }),
    methods: {
      show(){
        eventEmitter.$emit('show')
      }
    },
    components: {
      PatientTable
    },
    computed: {
      patients(){
        return this.$store.getters.patients
      }
    }
  }
</script>

<style>
</style>
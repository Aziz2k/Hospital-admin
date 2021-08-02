import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: [],
    doctors: [],
    search:'',
    patId:'',
    docId:''
  },
  getters: {
    getSearch(state){
      return s => {
        state.search = s
      }
    },
    patients(state){
      return state.patients
    },
    doctors(state){
      return state.doctors
    },
    patientsFilt(state){
      return state.patients.filter(a => {
        return a.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
    },
    doctorsFilt(state){
      return state.doctors.filter(a => {
        return a.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
    },
    countPatients(state){
      return state.patients.length
    },
    countDoctors(state){
      return state.doctors.length
    },
    docFiltName(state) {
      let docName = []
      for (let i = 0; i < state.doctors.length; i++) {
        docName.push(state.doctors[i].name)
      }
      return docName
    },
    showPatient(state){
      return p => {
        state.patId = p
      }
    },
    showDoctor(state){
      return p => {
        state.docId = p
      }
    },
    viewPatient(state){
      return state.patients.find(pat => {
        if(pat.id == state.patId) return pat
      })
    },
    viewDoctor(state){
      return state.doctors.find(doc => {
        if(doc.id == state.docId) return doc
      })
    }
  },
  mutations: {
    patient(state,payload){
      state.patients.push(payload)
    },
    getAllPatient(state,payload){
      state.patients = payload
    },
    removePatient(state,payload){
      state.patients.splice(state.patients.findIndex(function(i){ return i.id === payload; }), 1);
    },
    doctor(state,payload){
      state.doctors.push(payload)
    },
    getAllDocs(state,payload){
      state.doctors = payload
    },
    removeDoc(state,payload){
      state.doctors.splice(state.patients.findIndex(function(i){ return i.id === payload; }), 1);
    }
  },
  actions: {
    addNewPatient(context,addPatient){
      axios.post('http://localhost:3000/patients', addPatient).then(response => {
        context.commit('patient', response.data)
      })
    },
    allGetPatient(context){
      axios.get('http://localhost:3000/patients').then(response => {
        context.commit('getAllPatient', response.data)
      })
    },
    delPatient(context,id){
      axios.delete('http://localhost:3000/patients/'+id).then(response => {
        console.log(response)
        context.commit('removePatient',id)
      })
    },
    addNewDoc(context,addPatient){
      axios.post('http://localhost:3000/doctors', addPatient).then(response => {
        context.commit('doctor', response.data)
      })
    },
    allGetDocs(context){
      axios.get('http://localhost:3000/doctors').then(response => {
        context.commit('getAllDocs', response.data)
      })
    },
    delDoc(context,id){
      axios.delete('http://localhost:3000/doctors/'+id).then(response => {
        console.log(response)
        context.commit('removeDoc',id)
      })
    }
  }
})
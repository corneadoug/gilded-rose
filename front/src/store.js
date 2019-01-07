import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'http://localhost:8080'

export default new Vuex.Store({
  // State - Global Data Stored
  state: {
    inventory: []
  },
  // Mutations - Setters for the State
  mutations: {
    setInventory(state, data) {
      state.inventory = data;
    }
  },
  // Actions - Only link between the view and the Store Setters
  actions: {
    fetchInventory({ commit }) {
      axios.get(`${URL}/items/`).then(res => {
        commit('setInventory', res.data);
      })
    }
  }
})

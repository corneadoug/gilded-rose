import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Utils Import
import { itemMatchesFilter } from '@/utils.js'

Vue.use(Vuex)

const URL = 'http://localhost:8080'

export default new Vuex.Store({
  // State - Global Data Stored
  state: {
    inventory: [],
    dayPassed: 0,
    shoppingCart: [],
    filters: {
      name: '',
      minQuality: 0,
      maxQuality: 100
    }
  },
  // Mutations - Setters for the State
  mutations: {
    setInventory(state, data) {
      state.inventory = data;
    },
    setFilters(state, data) {
      if (data) {
        Vue.set(state, 'filters', data);
      } else {
        // If we don't send any data, it set filters to default values
        state.filters.name = '';
        state.filters.minQuality = 0;
        state.filters.maxQuality = 100;
      }
    },
    incrementDay(state) {
      state.dayPassed = state.dayPassed++;
    },
    addToCart(state, data) {
      state.shoppingCart.push(data);
    }
  },
  // Actions - Only link between the view and the Store Setters
  actions: {
    fetchInventory({ commit }) {
      axios.get(`${URL}/items/`)
        .then(res => {
          commit('setInventory', res.data);
        })
        .catch(() => {
          // TODO - Log Errors Somewhere
        });
    },

    nextDay({ commit, dispatch }) {
      axios.post(`${URL}/nextDay`)
        .then(() => {
          commit('incrementDay');
          dispatch('fetchInventory');
        })
        .catch(() => {
          // TODO - Log Errors Somewhere
        });
    },

    modifyFilter({ commit }, data) {
      commit('setFilters', data);
    },

    addItemToCart({ commit }, data) {
      commit('addToCart', data);
    }
  },
  getters: {
    filteredInventory: state => {
      return state.inventory.filter(item => {
        if (itemMatchesFilter(item, state.filters)) {
          return true;
        }
        return false;
      });
    },

    nbProductInCart: state => {
      return state.shoppingCart.length;
    },

    graphData: state => {
      // Get list of types
      let types = state.inventory.reduce((acc, val) => {
        if (!acc.hasOwnProperty(val.type)) {
          acc[val.type] = val.type;
        }
        return acc;
      }, {});

      // Prepare Data for Graph
      let res = [["Type", "Number", "Average Quality"]];
      Object.keys(types).forEach((el) => {
        let nb = 0;
        let total = 0;
        state.inventory.forEach((item) => {
          if (item.type === el) {
            nb++;
            total = total + item.quality;
          }
        });
        
        res.push([el, nb, nb > 0 ? total / nb : 0])
      });

      return res;
    },

    computedCart: state => {
      // Get the elements in the cart grouped by id
      let grouped = state.shoppingCart.reduce((acc, val) => {
        if (acc.hasOwnProperty(val.id)) {
          acc[val.id].nb = acc[val.id].nb + 1;
        } else {
          acc[val.id] = { id: val.id, nb: 1 };
        }
        return acc;
      }, {});

      // Transform from object to Array by adding latest values
      let result = [];
      state.inventory.forEach((value) => {
        if (grouped.hasOwnProperty(value.id)) {
          result.push({
            nbInCart: grouped[value.id].nb,
            details: value
          });
        }
      });

      return result;
    }
  }
})

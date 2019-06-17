import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    label: 'Tell me, what\'s your favourite item to buy? :) ',
    items: [
      'Headset',
      'Nintendo Switch',
      'Shoes',
      'Jackets'
    ]
  },
  getters: {
    itemCount: state => {
      return state.items.length
    }

  },
  mutations: {
    ADD_ITEM: (state, newItem) => {
      state.items.push(newItem)      
    },
    REMOVE_ITEM: (state, index) => {
      state.items.splice(index,1)
    },
    REMOVE_ALL: (state) => {
      state.items = []
    }
  }

})



export default store
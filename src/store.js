import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    const:0
  },
  mutations: {
    f1 (state) {
      state.const++
    }
  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectStore = {
  state: {
    list: [],
    inputVal: 'nihao'
  },
  mutations: {
    changelist (state, list) {
      state.list = list
      console.log(list)
    },
    changeInput (state, val) {
      state.inputVal = val
    }
  },
  actions: {
    getList ({commit}) {
      axios.post('http://easy-mock.com/mock/599a3f37059b9c566dc8edcd/nihao/list_1503280951377/care')
        .then((data) => {
          console.log(data.data.data)
          commit('changelist', data.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addCount (state, n) {
      state.count += n
    },
    deCount (state, n) {
      state.count -= n
    }
  },
  actions: {
  },
  modules: {
    selectStore
  }
})

export default store

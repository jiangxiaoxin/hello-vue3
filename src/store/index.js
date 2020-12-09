import { createStore } from 'vuex'
import { moduleA } from './modules/moduleA'

const root = {
  state() {
    return {
      count: 100
    }
  },
  mutations: {
    increment(state, payload) {
      console.log('增加的值', payload.value);
      state.count += payload.value;
    },
    decrement(state, payload) {
      state.count -= payload.value;
    }
  },
  actions: {
    incrementByValue(context, payload) {
      context.commit('increment', payload);
    }
  },
  getters: {
    rootCount(state) {
      return state.count;
    }
  },
  modules: {
    moduleA
  }
}

export const store = createStore(root);
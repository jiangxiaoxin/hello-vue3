export const moduleA = {
  namespaced: true,
  state: () => {
    return {
      times: [],
      count: 0,
    }
  },
  mutations: {
    insertTime(state, payload) {
      state.times.push(payload.time);
    },
    increment(state, payload) {
      state.count += payload.value;
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload);
    }
  },
  getters: {
    logTimes(state) {
      return state.times;
    } 
  }
};

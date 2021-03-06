import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

export default new Vuex.Store({
  state: {
    count: 0,
  } as State,
  mutations: {
    increment: (state, payload) => (state.count += payload.amount),
    decrement: (state, payload) => (state.count -= payload.amount),
  },
  getters: {
    positiveCount: (state) => {
      return state.count > 0 ? state.count : 0;
    },
  },
});

// main state
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoadingStatus: (state, status) => (state.loading = status)
  }
});

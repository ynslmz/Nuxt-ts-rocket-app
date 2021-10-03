// main state
export const types = {
  mutations: {
    setLoadingStatus: "setLoadingStatus"
  }
};

export const state = () => ({
  loading: false
});

export const mutations = {
  [types.mutations.setLoadingStatus](state, status) {
    state.loading = status;
  }
};

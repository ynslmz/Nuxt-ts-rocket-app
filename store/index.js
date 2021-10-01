// main state

export const state = () => ({
  loading: false,
  appName: "SpaceX"
});

export const mutations = {
  setLoadingStatus(state, status) {
    state.loading = status;
  }
};

export const mutations = {
  addRockets: "addRockets",
  sortRocketList: "sortRocketList",
  changeSortDirection: "changeSortDirection"
};

export default {
  [mutations.addRockets](state, rockets) {
    state.rocketList.push(...rockets);
  },
  [mutations.sortRocketList](state) {
    const direction = state.sortDirection == "desc" ? -1 : 1;
    state.rocketList = [
      ...state.rocketList.sort(
        (a, b) => (a.flight_number - b.flight_number) * direction
      )
    ];
  },
  [mutations.changeSortDirection](state, sortDirection) {
    state.sortDirection = sortDirection;
  }
};

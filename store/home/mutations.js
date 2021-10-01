export default {
  addRockets(state, rockets) {
    state.rocketList.push(...rockets);
  },
  sortRocketList(state) {
    const direction = state.sortDirection == "desc" ? -1 : 1;
    state.rocketList = [
      ...state.rocketList.sort(
        (a, b) => (a.flight_number - b.flight_number) * direction
      )
    ];
  },
  changeSortDirection(state, sortDirection) {
    state.sortDirection = sortDirection;
  }
};

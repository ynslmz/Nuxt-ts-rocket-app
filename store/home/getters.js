export const getters = {
  getSortingDirection: "getSortingDirection",
  getRocketList: "getRocketList"
};

export default {
  [getters.getSortingDirection]: state => state.sortingDirection,
  [getters.getRocketList]: state => state.rocketList
};

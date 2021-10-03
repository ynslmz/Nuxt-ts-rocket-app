export const getters = {
  getRocketDetails: "getRocketDetails",
  getRocketDetail: "getRocketDetail",
  hasRocketDetail: "hasRocketDetail"
};

export default {
  [getters.getRocketDetails]: state => {
    return state.rocketDetailsList;
  },
  [getters.getRocketDetail]: state => rocketId => {
    return state.rocketDetailsList.find(
      ({ rocket_id }) => rocket_id === rocketId
    );
  },
  [getters.hasRocketDetail]: state => rocketId => {
    return (
      state.rocketDetailsList.findIndex(
        ({ rocket_id }) => rocket_id === rocketId
      ) > -1
    );
  }
};

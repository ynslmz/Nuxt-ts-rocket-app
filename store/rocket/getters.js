export default {
  getRocketDetails: state => {
    return state.rocketDetailsList;
  },
  getRocketDetail: state => rocketId => {
    return state.rocketDetailsList.find(
      ({ rocket_id }) => rocket_id === rocketId
    );
  },
  hasRocketDetail: state => rocketId => {
    return (
      state.rocketDetailsList.findIndex(
        ({ rocket_id }) => rocket_id === rocketId
      ) > -1
    );
  }
};

export const mutations = { addRocketInfo: "addRocketInfo" };

export default {
  [mutations.addRocketInfo](state, rocket) {
    state.rocketDetailsList.push(rocket);
  }
};

import axios from "axios";

export default {
  getRocketInfo(context, rocketId) {
    if (!context.getters.hasRocketDetail(rocketId)) {
      context.commit("setLoadingStatus", true, { root: true });

      axios
        .get(" https://api.spacexdata.com/v3/rockets/" + rocketId)
        .then(response => {
          console.log(response);
          context.commit("addRocketInfo", response.data);
          context.commit("setLoadingStatus", false, { root: true });
        });
    }
  }
};

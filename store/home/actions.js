import axios from "axios";

export default {
  getLatestRocketList(context) {
    if (context.state.rocketList.length == 0) {
      context.commit("setLoadingStatus", true, { root: true });
      axios
        .get("https://api.spacexdata.com/v3/launches/past")
        .then(response => {
          console.log(response);
          context.commit("addRockets", response.data);
          context.commit("setLoadingStatus", false, { root: true });
        });
    }
  }
};

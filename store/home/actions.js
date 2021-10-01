import axios from "axios";

export default {
  getLatestRocketList(context) {
    if (context.state.rocketList.length == 0) {
      context.commit("setLoadingStatus", true, { root: true });
      axios
        .get("https://api.spacexdata.com/v3/launches/past")
        .then(response => {
          context.commit("addRockets", response.data);
          context.commit("sortRocketList");
          context.commit("setLoadingStatus", false, { root: true });
        });
    }
  },
  changeSort(context, sortDirection) {
    context.commit("changeSortDirection", sortDirection);
    context.commit("sortRocketList");
  }
};

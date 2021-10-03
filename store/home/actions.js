import axios from "axios";
import { mutations } from "./mutations";
import { types as rootTypes } from "../";

export const actions = {
  fetchLatestLunchEvents: "fetchLatestLunchEvents",
  changeSort: "changeSort"
};

export default {
  [actions.fetchLatestLunchEvents](context) {
    if (context.state.rocketList.length == 0) {
      context.commit(rootTypes.mutations.setLoadingStatus, true, {
        root: true
      });
      axios
        // todo take apiUrl from a config
        .get("https://api.spacexdata.com/v3/launches/past")
        .then(response => {
          context.commit(mutations.addRockets, response.data);
          context.commit(mutations.sortRocketList);
          context.commit(rootTypes.mutations.setLoadingStatus, false, {
            root: true
          });
        });
    }
  },
  [actions.changeSort](context, sortDirection) {
    context.commit(mutations.changeSortDirection, sortDirection);
    context.commit(mutations.sortRocketList);
  }
};

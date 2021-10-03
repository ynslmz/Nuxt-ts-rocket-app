import axios from "axios";
import { types } from "../index";
import { mutations } from "./mutations";

export const actions = { fetchRocketInfo: "fetchRocketInfo" };

export default {
  [actions.fetchRocketInfo](context, rocketId) {
    if (!context.getters.hasRocketDetail(rocketId)) {
      context.commit(types.mutations.setLoadingStatus, true, { root: true });

      axios
        // todo take apiUrl from a config
        .get(" https://api.spacexdata.com/v3/rockets/" + rocketId)
        .then(response => {
          context.commit(mutations.addRocketInfo, response.data);
          context.commit(types.mutations.setLoadingStatus, false, {
            root: true
          });
        });
    }
  }
};

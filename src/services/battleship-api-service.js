import config from "../config";
import TokenService from "../services/token-service";

const BattleshipAPI = {
  getStats() {
    //figure out endpoint
    return fetch(`${config.API_ENDPOINT}/stats`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  loadAiGame(id) {
    return fetch(`${config.API_ENDPOINT}/`, {
      method: "GET",
      headers: {
        // authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  loadPrivateGame(id) {
    return fetch(`${config.API_ENDPOINT}/`, {
      method: "GET",
      headers: {
        // authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BattleshipAPI
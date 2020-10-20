import config from "../config";
import TokenService from "../services/token-service";

const BattleshipAPI = {
  getStats() {
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
  getState(id) {
    return fetch(`${config.API_ENDPOINT}/game:id`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      }
    }).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getUser() {
    return fetch(`${config.API_ENDPOINT}/`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postMove(gameId, x, y) {
    return fetch(`${config.API_ENDPOINT}/game`, {
      method: "POST",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BattleshipAPI
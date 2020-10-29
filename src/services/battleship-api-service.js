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
    return fetch(`${config.API_ENDPOINT}/game/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  generateBoard() {
    return fetch(`${config.API_ENDPOINT}/game/genboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  newGame(gameState) {
    return fetch(`${config.API_ENDPOINT}/game/newgame/`, {
      method: "POST",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p1_board: gameState.p1_board,
        p2_board: gameState.p2_board,
        p1_health: gameState.p1_health,
        p2_health: gameState.p2_health,
        player_turn: gameState.player_turn,
        active_game: gameState.active_game,
      }),
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
    return fetch(`${config.API_ENDPOINT}/game/${gameId}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        x: x,
        y: y,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAiMove(gameId) {
    return fetch(`${config.API_ENDPOINT}/game/aimove/${gameId}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BattleshipAPI;

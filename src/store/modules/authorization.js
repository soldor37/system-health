import axios from "axios";
// Аутентификация
const state = () => ({
  // статус авторизации
  authStatus: "",
  // токен
  token: localStorage.getItem("token") || "",
  // тип токена
  refreshToken: localStorage.getItem("refreshToken") || "",
});

const mutations = {
  auth_request(state) {
    state.authStatus = "loading";
  },
  auth_success(state, payload) {
    state.authStatus = "success";
    state.token = payload.token;
    state.refreshToken = payload.refreshToken;
  },
  auth_error(state) {
    state.authStatus = "error";
  },
  logout(state) {
    state.authStatus = "";
    state.token = "";
    state.refreshToken = "";
  },
};
const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios
        .post(`/auth/authenticate`, user)
        .then((resp) => {
          // достаем инфу о токене
          const token = resp.data.accessToken;
          const refreshToken = resp.data.refreshToken;
          // кладем в хранилище
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          commit("auth_success", {
            token: token,
            refreshToken: refreshToken,
          });
          resolve(resp);
        })
        .catch((err) => {
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  },
};
const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.authStatus,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

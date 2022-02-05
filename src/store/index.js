import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    resultAllAnimes: [],
    resultOneAnime: [],
    user: []
  },
  mutations: {
    setAllAnimes(state, anime) {
      state.resultAllAnimes = anime;
    },
    setOneAnime(state, anime) {
      state.resultOneAnime = anime;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    getAllAnimes({ commit }, value) {
      axios.get(`https://api.jikan.moe/v3/search/anime?q=${value}`)
        .then((response) => {
          commit('setAllAnimes', response.data);
        }).catch((error) => {
          if (error.response.status === 404) {
            commit('setAllAnimes', { errors: 'Anime não encontrado.' });
          } else if (error.response.status === 429) {
            commit('setAllAnimes', { errors: 'Tente novamente.' });
          }
          return error;
        });
    },
    getOneAnime({ commit }, value) {
      axios.get(`https://api.jikan.moe/v3/anime/${value}`)
        .then((response) => {
          commit('setOneAnime', response.data);
        }).catch((error) => {
          return error;
        });
    },
    randomUser({ commit }, value) {
      axios.get(`https://randomuser.me/api/`)
        .then((response) => {
          commit('setUser', response.data.results[0]);
        })
    }
  },
});

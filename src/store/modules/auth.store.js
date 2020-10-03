import axios from 'axios';

export default {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),

  actions: {
    // TODO Implement
    async login() {},

    logout({ commit }) {
      commit('logout');
    },

    async register({ commit }, props) {
      try {
        const response = await axios({
          method: 'post',
          url: 'register',
          baseURL: 'http://128.199.238.245:8080/',
          data: props,
        });

        commit('login', response.data.token);
      } catch (err) {
        console.error(err);
        commit('logout');
      }
    },
  },

  mutations: {
    login(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;
    },

    logout() {
      localStorage.removeItem('token');
    },
  },

  getters: {
    token: state => state.token,
  },
};

import { sleep } from '@/utils/functions';
import { CATEGORIES } from '@/utils/constants';

export default {
  state: {
    categories: [],
  },
  actions: {
    async fetchCategories({ commit }) {
      await sleep(1000);
      commit('updateCategories', CATEGORIES);
    },
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    },
  },
  getters: {
    categories: state => state.categories,
  },
};

import { sleep } from '@/utils/functions';
import { PRODUCTS } from '@/utils/constants';

export default {
  state: {
    products: [],
  },
  actions: {
    async fetchProducts({ commit }) {
      await sleep(1000);
      commit('updateProducts', PRODUCTS);
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
  getters: {
    products: state => state.products,
  },
};

import { sleep } from '@/utils/functions';
import { PRODUCTS } from '@/utils/constants';

export default {
  state: {
    checkout: [],
  },
  actions: {
    async addItem({ commit }, id) {
      await sleep(1000);
      const product = PRODUCTS.find(el => el.id === parseInt(id)) || {};
      commit('addItem', product);
    },

    async removeItem({ commit }, id) {
      await sleep(1000);
      commit('removeItem', id);
    },
  },
  mutations: {
    addItem(state, product) {
      state.checkout = [...state.checkout, product];
      console.log('state.checkout', state.checkout);
    },

    removeItem(state, product) {
      state.checkout.splice(product, 1);
    },
  },
  getters: {
    checkout: state => state.checkout,
  },
};

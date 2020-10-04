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
      commit('addItem', { ...product, amount: 1 });
    },

    async removeItem({ commit }, id) {
      await sleep(1000);
      commit('removeItem', id);
    },

    async clearCheckout({ commit }) {
      commit('clearCheckout');
    },
  },
  mutations: {
    addItem(state, product) {
      state.checkout = [...state.checkout, product];
    },

    removeItem(state, product) {
      state.checkout.splice(product, 1);
    },

    clearCheckout(state) {
      state.checkout = [];
    },
  },
  getters: {
    checkout: state => state.checkout,
    sum: state => {
      return state.checkout
        .reduce((acc, curr) => acc + parseFloat(curr.price), 0)
        .toFixed(2);
    },
  },
};

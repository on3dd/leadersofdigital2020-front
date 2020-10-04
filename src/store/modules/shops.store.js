import { sleep } from '@/utils/functions';
import { SHOPS } from '@/utils/constants';

export default {
  state: {
    shops: [],
  },
  actions: {
    async fetchShops({ commit }) {
      await sleep(1000);
      commit('updateShops', SHOPS);
    },
  },
  mutations: {
    updateShops(store, shops) {
      store.shops = shops;
    },
  },
  getters: {
    shops: state => state.shops,
  },
};

import { sleep } from '@/utils/functions';
import { ITEM } from '@/utils/constants';

export default {
  state: {
    item: {},
  },
  actions: {
    async fetchItem({ commit }) {
      await sleep(1000);
      commit('updateItem', ITEM);
    },
  },
  mutations: {
    updateItem(state, item) {
      state.item = item;
    },
  },
  getters: {
    item: state => state.item,
  },
};

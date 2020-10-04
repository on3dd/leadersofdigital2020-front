import { sleep } from '@/utils/functions';

export default {
  state: {
    currentOrders: [],
    previousOrders: [
      { name: 'Заказ №4 (1240 р.)' },
      { name: 'Заказ №3 (1135 р.)' },
      { name: 'Заказ №2 (1900 р.)' },
      { name: 'Заказ №1 (940 р.)' },
    ],
  },
  actions: {
    async createOrder({ commit }, sum) {
      await sleep(1000);
      commit('createOrder', sum);
    },
  },
  mutations: {
    createOrder(state, sum) {
      state.currentOrders = [
        {
          name: `Заказ №${state.previousOrders.length +
            state.currentOrders.length +
            1} (${sum} р.)`,
        },
        ...state.currentOrders,
      ];
    },
  },
  getters: {
    currentOrders: state => state.currentOrders,
    previousOrders: state => state.previousOrders,
  },
};

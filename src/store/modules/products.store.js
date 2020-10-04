import { sleep } from '@/utils/functions';
import { PRODUCTS } from '@/utils/constants';

export default {
  state: {
    products: [],
    product: {},
  },
  actions: {
    async fetchProducts({ commit }) {
      await sleep(1000);
      commit('updateProducts', PRODUCTS);
    },
    async fetchProduct({ commit }, id) {
      await sleep(1000);
      const product = PRODUCTS.find(el => el.id === parseInt(id)) || {};
      commit('updateProduct', product);
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    updateProduct(state, product) {
      state.product = product;
    },
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
  },
};

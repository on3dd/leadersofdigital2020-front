<template>
	<div class="shops-category">
		<Goods :items="products" />
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import Goods from '@/components/home/shared/Goods';

	export default {
		name: 'ShopsIdCategoryComponent',
		components: {
			Goods,
		},
		data: () => ({}),
		computed: {
			...mapGetters(['products']),
		},
		methods: {
			...mapActions(['fetchProducts']),
		},
		async mounted() {
      console.log('fetching products');
			await this.fetchProducts();
		},
	};
</script>

<style scoped lang="scss">
	.shops-category {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

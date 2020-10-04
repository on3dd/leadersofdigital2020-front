<template>
	<div class="products">
		<Items :items="categories" />
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import Items from '@/components/home/shared/Items';

	export default {
		name: 'ProductsComponent',
		components: {
			Items,
		},
		data: () => ({}),
		computed: {
			...mapGetters(['categories']),
		},
		methods: {
			...mapActions(['fetchCategories']),
		},
		async mounted() {
			await this.fetchCategories();
		},
	};
</script>

<style scoped lang="scss">
	.products {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

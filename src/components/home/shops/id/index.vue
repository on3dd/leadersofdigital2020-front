<template>
	<div class="shops-id">
		<Items :items="categories" />
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import Items from '@/components/home/shared/Items';

	export default {
		name: 'ShopsIdComponent',
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
      console.log('fetching categories');
			await this.fetchCategories();
		},
	};
</script>

<style scoped lang="scss">
	.shops-id {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

<template>
	<div class="shops">
		<Items :items="shops" />
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import Items from '@/components/home/shared/Items';

	export default {
		name: 'ShopsComponent',
		components: {
			Items,
		},
		data: () => ({}),
		computed: {
			...mapGetters(['shops']),
		},
		methods: {
			...mapActions(['fetchShops']),
		},
		async mounted() {
      console.log('fetching shops');
			await this.fetchShops();
		},
	};
</script>

<style scoped lang="scss">
	.shops {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

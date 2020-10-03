<template>
	<div class="shops-id">
		<Items :items="items" />
	</div>
</template>

<script>
	import Items from '@/components/home/shared/Items';

	export default {
		name: 'ShopsIdComponent',
		components: {
			Items,
		},
		data: () => ({
			items: [
				{ id: 1, name: 'category 1', link: '/home/shops/samberi/snacks' },
				{ id: 2, name: 'category 2', link: '/home/shops/samberi/snacks' },
				{ id: 3, name: 'category 3', link: '/home/shops/samberi/snacks' },
				{ id: 4, name: 'category 4', link: '/home/shops/samberi/snacks' },
				{ id: 5, name: 'category 5', link: '/home/shops/samberi/snacks' },
				{ id: 6, name: 'category 6', link: '/home/shops/samberi/snacks' },
				{ id: 7, name: 'category 7', link: '/home/shops/samberi/snacks' },
				{ id: 8, name: 'category 8', link: '/home/shops/samberi/snacks' },
				{ id: 9, name: 'category 9', link: '/home/shops/samberi/snacks' },
				{ id: 10, name: 'category 10', link: '/home/shops/samberi/snacks' },
			],
		}),
	};
</script>

<style scoped lang="scss">
	.shops-id {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

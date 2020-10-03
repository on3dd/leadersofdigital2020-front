<template>
	<div class="shops">
		<Items :items="items" />
	</div>
</template>

<script>
	import Items from '@/components/home/shared/Items';

	export default {
		name: 'ShopsComponent',
		components: {
			Items,
		},
		data: () => ({
			items: [
				{ id: 1, name: 'shop 1', link: '/home/shops/samberi' },
				{ id: 2, name: 'shop 2', link: '/home/shops/samberi' },
				{ id: 3, name: 'shop 3', link: '/home/shops/samberi' },
				{ id: 4, name: 'shop 4', link: '/home/shops/samberi' },
				{ id: 5, name: 'shop 5', link: '/home/shops/samberi' },
				{ id: 6, name: 'shop 6', link: '/home/shops/samberi' },
				{ id: 7, name: 'shop 7', link: '/home/shops/samberi' },
				{ id: 8, name: 'shop 8', link: '/home/shops/samberi' },
				{ id: 9, name: 'shop 9', link: '/home/shops/samberi' },
				{ id: 10, name: 'shop 10', link: '/home/shops/samberi' },
			],
		}),
	};
</script>

<style scoped lang="scss">
	.shops {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

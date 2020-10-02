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
				{ id: 1, name: 'shop 1' },
				{ id: 2, name: 'shop 2' },
				{ id: 3, name: 'shop 3' },
				{ id: 4, name: 'shop 4' },
				{ id: 5, name: 'shop 5' },
				{ id: 6, name: 'shop 6' },
				{ id: 7, name: 'shop 7' },
				{ id: 8, name: 'shop 8' },
				{ id: 9, name: 'shop 9' },
				{ id: 10, name: 'shop 10' },
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

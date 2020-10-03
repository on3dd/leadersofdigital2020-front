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
				{ id: 1, name: 'category 1' },
				{ id: 2, name: 'category 2' },
				{ id: 3, name: 'category 3' },
				{ id: 4, name: 'category 4' },
				{ id: 5, name: 'category 5' },
				{ id: 6, name: 'category 6' },
				{ id: 7, name: 'category 7' },
				{ id: 8, name: 'category 8' },
				{ id: 9, name: 'category 9' },
				{ id: 10, name: 'category 10' },
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

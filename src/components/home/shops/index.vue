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
				{ id: 1, name: 'nigger 1' },
				{ id: 2, name: 'nigger 2' },
				{ id: 3, name: 'nigger 3' },
				{ id: 4, name: 'nigger 4' },
				{ id: 5, name: 'nigger 5' },
				{ id: 6, name: 'nigger 6' },
				{ id: 7, name: 'nigger 7' },
				{ id: 8, name: 'nigger 8' },
				{ id: 9, name: 'nigger 9' },
				{ id: 10, name: 'nigger 10' },
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

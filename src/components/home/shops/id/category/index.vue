<template>
	<div class="shops-category">
		<Goods :items="items" />
	</div>
</template>

<script>
	import Goods from '@/components/home/shared/Goods';

	export default {
		name: 'ShopsIdCategoryComponent',
		components: {
			Goods,
		},
		data: () => ({
			items: [
				{
					id: 1,
					name: 'very long good 1',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 2,
					name: 'very long good 2',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 3,
					name: 'very long good 3',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 4,
					name: 'very long good 4',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 5,
					name: 'very long good 5',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 6,
					name: 'very long good 6',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 7,
					name: 'very long good 7',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 8,
					name: 'very long good 8',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 9,
					name: 'very long good 9',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
				{
					id: 10,
					name: 'very long good 10',
					price: '1488 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
				},
			],
		}),
	};
</script>

<style scoped lang="scss">
	.shops-category {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>

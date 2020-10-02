<template>
	<div class="items">
		<template v-for="(item, idx) in items">
			<div :key="idx" class="item">
				<div class="item__content">
					<!-- <img
						src="https://lh3.googleusercontent.com/proxy/GhAqC3uDuonjtO7q48BJApkATIDC--X7DMjnB2_PPWQ3bh7dAOcL0hF5Rlgy4ItP9uVK8LA_ZqV3CUMUOg1lNQhGgoal3ooHA7ks4sjWRfXpAQ"
						alt=""
						class="item__image"
					/> -->
					<span class="item__text">{{ item.name }}</span>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'Items',
		props: {
			items: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped lang="scss">
	.items {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: 1fr;
		grid-gap: 30px;
		margin: 30px 0;
		padding: 0 30px;
	}

	.item {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--secondary-color);
	}

	.item::before {
		content: '';
		display: block;
		padding-top: 100%;
	}

	.item__content {
		overflow: hidden;
	}

	.item__image {
    width: 100%;
	}

	.item__text {
		text-transform: uppercase;
	}
</style>

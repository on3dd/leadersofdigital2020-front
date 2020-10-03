<template>
	<div class="items">
		<template v-for="(item, idx) in items">
			<div :key="idx" class="item">
				<div class="item__content">
					<router-link :to="item.link" class="item__link">
						<span class="item__text">{{ item.name }}</span>
					</router-link>
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
		height: inherit;
		width: inherit;
		overflow: hidden;
	}

	.item__link {
		height: inherit;
		width: inherit;
		color: inherit;
		text-decoration: none;
	}

	.item__image {
		width: 100%;
	}

	.item__text {
		text-transform: uppercase;
	}
</style>

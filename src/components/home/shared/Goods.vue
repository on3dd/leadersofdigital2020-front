<template>
	<div class="goods">
		<template v-for="(item, idx) in items">
			<div :key="idx" class="good">
				<div class="good__content">
					<div class="good__preview">
						<img :src="item.image" alt="" class="good__image" />
					</div>
					<span class="good__name">{{ item.name }}</span>
					<span class="good__price">{{ item.price }}</span>
					<div class="good__control">
						<Button color=" yellow" class="good__button">В корзину</Button>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	import Button from '@/components/base-ui/Button';

	export default {
		name: 'goods',
		components: {
			Button,
		},
		props: {
			items: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.goods {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: 1fr;
		grid-gap: 30px;
		margin: 30px 0;
		padding: 0 30px;
	}

	.good {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: var(--secondary-color); */
	}

	.good::before {
		content: '';
		display: block;
		/* padding-top: 100%; */
	}

	.good__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		overflow: hidden;
	}

	.good__preview {
		height: 127px;
		margin-bottom: 0.5rem;
		overflow: hidden;
	}

	.good__image {
		height: 100%;
	}

	.good__name {
		margin-bottom: 0.25rem;
		font-size: 0.75rem;
		font-weight: 800;
		text-align: center;
		text-transform: uppercase;
  }

  .good__price {
		margin-bottom: 0.25rem;
    font-size: 1.125rem;
    font-weight: 800;
  }

	.good__control {
		width: 100%;
	}

	.good__button {
		@include button(5px 0, 14px, 15px);

		width: 100%;
		height: 2rem;
		white-space: nowrap;
	}
</style>

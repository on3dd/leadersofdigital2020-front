<template>
	<div class="basket__item">
		<div class="basket__wrapper">
			<img :src="item.image" alt="Item image" class="basket__image" />
		</div>
		<div class="basket__info">
			<h3 class="basket__name">{{ item.name }}</h3>
			<h2 class="basket__price">{{ item.price }}</h2>
		</div>
		<div class="basket__controls">
			<InputAmount :value="item.amount" :small="true" @change="handleChange" />
			<Icon name="cross" class="basket__remove" />
		</div>
	</div>
</template>

<script>
	import Icon from '@/components/base-ui/Icon';
	import InputAmount from '@/components/base-ui/InputAmount';

	export default {
		name: 'CheckoutBasketItem',
		components: {
			Icon,
			InputAmount,
		},
		props: {
			item: {
				type: Object,
				required: true,
			},
		},
		methods: {
			handleChange(val) {
				this.item.amount = val === 0 ? 1 : val;
			},
		},
	};
</script>

<style scoped lang="scss">
	.basket__item {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		width: 100%;
		margin-bottom: 1.5rem;
	}

	.basket__wrapper {
		display: flex;
		justify-content: center;
		height: 53px;
		width: 53px;
		flex: 0 0 53px;
    margin-right: 0.75rem;
    overflow: hidden;
  }

	.basket__image {
		height: 100%;
	}

	.basket__info {
		flex: 1;
		text-transform: uppercase;
	}

	.basket__name {
		display: block;
		margin: 0;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 0.9rem;
	}

	.basket__price {
		margin-top: auto;
		margin-bottom: 0;
		font-size: 1.125rem;
		font-weight: 800;
	}

	.basket__controls {
		display: flex;
		align-items: center;
	}

	.basket__remove {
		margin-top: 3px;
		margin-left: 0.25rem;
	}
</style>

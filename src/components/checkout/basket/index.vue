<template>
	<div class="basket container">
		<div class="backet__container">
			<template v-for="(item, idx) in items">
				<BasketItem
					:key="idx"
					v-model="item.amount"
					:name="item.name"
					:price="item.price"
					:image="item.image"
				/>
			</template>
		</div>

		<div class="basket__divider" />

		<div class="basket__controls">
			<div class="basket__total">
				<h3 class="basket__res">Итого:</h3>
				<span class="basket__sum">1488 р.</span>
			</div>

			<Button color="gray" :disabled="true" class="basket__button">
				Поделиться заказом
			</Button>

			<Button color="yellow" class="basket__button" @click="handleClick">
				Оформить заказ
			</Button>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/base-ui/Button';
	import BasketItem from '@/components/checkout/basket/Item';

	export default {
		name: 'CheckoutBasket',
		components: {
			Button,
			BasketItem,
		},
		data: () => ({
			amount: 1,
			items: [
				{
					name: 'Чипсы "Лейс" (краб)',
					price: '156 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
					amount: 1,
				},
				{
					name: 'Чипсы "Лейс" (краб)',
					price: '156 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
					amount: 1,
				},
				{
					name: 'Чипсы "Лейс" (краб)',
					price: '156 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
					amount: 1,
				},
				{
					name: 'Чипсы "Лейс" (краб)',
					price: '156 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
					amount: 1,
				},
				{
					name: 'Чипсы "Лейс" (краб)',
					price: '156 р.',
					image:
						'https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png',
					amount: 1,
				},
			],
		}),
		methods: {
			handleClick(evt) {
				this.$emit('click', evt);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.basket {
		height: 100%;
		width: 100%;
	}

	.basket__container {
		width: inherit;
	}

	.basket__controls {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-top: auto;
	}

	.basket__divider {
		width: 100%;
		height: 1px;
		margin-bottom: 19px;
	}

	.basket__button {
		@include button(18px 0 !important, 1.125rem, 30px !important);

		width: 100%;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	.basket__total {
		text-align: center;
		margin-bottom: 0.75rem;
	}

	.basket__res {
		display: inline;
		margin: 0;
		margin-right: 0.5rem;
		font-size: 1.125rem;
		font-weight: 800;
		line-height: 1rem;
		text-transform: uppercase;
	}

	.basket__sum {
    font-size: 1.125rem;
	}
</style>

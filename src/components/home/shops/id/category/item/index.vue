<template>
	<div class="item">
		<div class="item__wrapper">
			<img
				src="https://tomahawk.in.ua/image/cache/catalog/sneki/377508-500x700.png"
				alt="Item image"
				class="item__image"
			/>
		</div>
		<div class="item__info">
			<h1 class="item__name">Чипсы "Лейс" (краб)</h1>
			<p class="item__description">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
				exercitationem?
			</p>
		</div>
		<div class="item__amount">
			<InputAmount v-model="amount" />
		</div>
		<div class="item__control">
			<Button color="yellow" class="item__button">В корзину</Button>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/base-ui/Button';
	import InputAmount from '@/components/base-ui/InputAmount';

	export default {
		name: 'ShopsIdCategoryComponentItem',
		components: {
			Button,
			InputAmount,
		},
		data: () => ({
			amount: 1,
		}),
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.item {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 30px 0;
		padding: 0 30px;
	}

	.item__wrapper {
		width: 100%;
	}

	.item__image {
		width: 100%;
	}

	.item__info {
		text-align: center;
		margin-bottom: 2rem;
	}

	.item__name {
		margin: 0;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.item__description {
		margin: 0;
		padding: 0;
		text-transform: uppercase;
	}

	.item__amount {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.item__control {
		width: 100%;
		margin-top: auto;
	}

	.item__button {
		@include button(18px 0, 1.125rem, 30px);
		width: 100%;
	}
</style>

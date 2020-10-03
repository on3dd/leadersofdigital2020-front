<template>
	<div class="checkout screen">
		<div class="checkout__section">
			<h2 class="checkout__heading">Оплата</h2>
			<div class="checkout__options">
				<InputRadio
					id="cash"
					value="cash"
					label="Наличные"
					name="payment"
					v-model="payment"
					class="checkout__option"
				/>
				<InputRadio
					id="non-cash"
					value="non-cash"
					label="Банковская карта"
					name="payment"
					v-model="payment"
					class="checkout__option"
				/>
			</div>
		</div>

		<div class="checkout__section">
			<h2 class="checkout__heading">Адрес</h2>
			<div class="checkout__options">
				<InputRadio
					id="current"
					value="current"
					label="Текущий"
					name="address"
					v-model="address"
					class="checkout__option"
				/>
				<InputRadio
					id="new"
					value="new"
					label="Новый"
					name="address"
					v-model="address"
					class="checkout__option"
				/>
			</div>
		</div>

		<div class="checkout__section">
			<h2 class="checkout__heading">Стоимость доставки</h2>
			<InputRange :v-model="amount" />
		</div>

		<div class="checkout__divider" />

		<div class="checkout__control">
			<div class="checkout__total">
				<h3 class="checkout__res">Итого:</h3>
				<span class="checkout__sum">1488 р.</span>
			</div>
			<Button color="yellow" class="checkout__button">Продолжить</Button>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/base-ui/Button';
	import InputRadio from '@/components/base-ui/InputRadio';
	import InputRange from '@/components/checkout/InputRange';

	export default {
		name: 'CheckoutComponent',
		components: {
			Button,
			InputRadio,
			InputRange,
		},
		data: () => ({
			payment: 'cash',
			address: 'current',
			amount: 100,
		}),
	};
</script>

<style scope lang="scss">
	@import '@/scss/_button.scss';

	.checkout {
		align-items: flex-start;
	}

	.checkout__section {
		width: 100%;
		margin-bottom: 2rem;
	}

	.checkout__heading {
		margin: 0;
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.checkout__options {
	}

	.checkout__option {
		margin-bottom: 0.75rem;
  }

  .checkout__divider {
    width: 100%;
    margin-bottom: 20px;
  }

	.checkout__control {
		width: 100%;
		margin-top: auto;
	}

	.checkout__total {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.checkout__res {
		display: inline;
		margin: 0;
		margin-right: 0.5rem;
		font-size: 1.25rem;
		font-weight: 800;
		line-height: 1rem;
		text-transform: uppercase;
	}

	.checkout__sum {
	}

	.checkout__button {
		@include button(18px 0 !important, 1.125rem, 30px !important);

		width: 100%;
	}
</style>

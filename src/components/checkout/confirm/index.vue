<template>
	<div class="confirm container">
		<div class="confirm__section">
			<h2 class="confirm__heading">Оплата</h2>
			<div class="confirm__options">
				<InputRadio
					id="cash"
					value="cash"
					label="Наличные"
					name="payment"
					v-model="payment"
					class="confirm__option"
				/>
				<InputRadio
					id="non-cash"
					value="non-cash"
					label="Банковская карта"
					name="payment"
					v-model="payment"
					class="confirm__option"
				/>
			</div>
		</div>

		<div class="confirm__section">
			<h2 class="confirm__heading">Адрес</h2>
			<div class="confirm__options">
				<InputRadio
					id="current"
					value="current"
					label="Текущий"
					name="address"
					v-model="address"
					class="confirm__option"
				/>
				<InputRadio
					id="new"
					value="new"
					label="Новый"
					name="address"
					v-model="address"
					class="confirm__option"
				/>
			</div>
		</div>

		<div class="confirm__section">
			<h2 class="confirm__heading">Стоимость доставки</h2>
			<InputRange v-model="amount" />
		</div>

		<div class="confirm__divider" />

		<div class="confirm__control">
			<div class="confirm__total">
				<h3 class="confirm__res">Итого:</h3>
				<span class="confirm__sum">{{ result }} р.</span>
			</div>

			<Button color="yellow" class="confirm__button" @click="handleClick">
				Продолжить
			</Button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import Button from '@/components/base-ui/Button';
	import InputRadio from '@/components/base-ui/InputRadio';
	import InputRange from '@/components/checkout/InputRange';

	export default {
		name: 'CheckoutConfirm',
		components: {
			Button,
			InputRadio,
			InputRange,
		},
		data: () => ({
			payment: 'cash',
			address: 'current',
			value: 100,
		}),
		computed: {
			...mapGetters(['sum']),

			amount: {
				get() {
					return this.value;
				},

				set(val) {
					this.value = val > 0 ? val : 0;
				},
			},

			result() {
				return parseFloat(this.sum) + parseFloat(this.amount);
			},
		},
		methods: {
			...mapActions(['createOrder', 'clearCheckout']),

			async handleClick() {
				await this.createOrder(this.result);
				await this.clearCheckout();
				await this.$router.push('/orders');
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.confirm {
		height: 100%;
		width: 100%;
	}

	.confirm__section {
		width: 100%;
		margin-bottom: 2rem;
	}

	.confirm__heading {
		margin: 0;
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.confirm__options {
	}

	.confirm__option {
		margin-bottom: 0.75rem;
	}

	.confirm__divider {
		width: 100%;
		height: 1px;
		margin-bottom: 19px;
	}

	.confirm__control {
		width: 100%;
		margin-top: auto;
	}

	.confirm__total {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.confirm__res {
		display: inline;
		margin: 0;
		margin-right: 0.5rem;
		font-size: 1.25rem;
		font-weight: 800;
		line-height: 1rem;
		text-transform: uppercase;
	}

	.confirm__sum {
		font-size: 1.125rem;
	}

	.confirm__button {
		@include button(18px 0 !important, 1.125rem, 30px !important);

		width: 100%;
	}
</style>

<template>
	<div class="checkout screen">
		<Basket v-if="confirmed === false" @toggle="toggleConfirmed" />
		<Confirm v-else @toggle="toggleConfirmed" />
	</div>
</template>

<script>
	import Basket from '@/components/checkout/basket';
	import Confirm from '@/components/checkout/confirm';

	export default {
		name: 'CheckoutComponent',
		components: {
			Basket,
			Confirm,
		},
		data: () => ({
			confirmed: false,
		}),
		methods: {
			toggleConfirmed() {
				this.confirmed = !this.confirmed;
			},
		},
	};
</script>

<style scope lang="scss">
	.checkout {
		align-items: flex-start;
	}
</style>

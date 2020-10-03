<template>
	<div class="checkout screen">
		<Basket v-if="confirmed === false" @click="handleClick" />
		<Confirm v-else />
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
			handleClick() {
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

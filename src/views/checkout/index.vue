<template>
	<div class="app">
		<head class="head">
			<Header :name="name" />
		</head>
		<main class="main">
			<CheckoutComponent />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/base-ui/Header';
	import CheckoutComponent from '@/components/checkout';

	export default {
		name: 'Checkout',
		components: {
			Header,
			CheckoutComponent,
		},
		data: () => ({
			name: 'Корзина',
		}),
	};
</script>

<style scoped lang="scss">
</style>

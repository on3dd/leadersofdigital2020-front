<template>
	<div class="app">
		<head class="head">
			<Header :name="name" />
		</head>
		<main class="main">
			<OrdersComponent />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/base-ui/Header';
	import OrdersComponent from '@/components/orders';

	export default {
		name: 'About',
		components: {
			Header,
			OrdersComponent,
		},
		data: () => ({
			name: 'Заказы',
		}),
	};
</script>

<style scoped lang="scss">
</style>

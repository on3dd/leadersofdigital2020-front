<template>
	<div class="app">
		<head class="head">
			<Header :name="name" />
		</head>
		<main class="main">
			<AboutComponent />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/base-ui/Header';
	import AboutComponent from '@/components/about';

	export default {
		name: 'About',
		components: {
			Header,
			AboutComponent,
		},
		data: () => ({
			name: 'О нас',
		}),
	};
</script>

<style scoped lang="scss">
</style>

<template>
	<div class="home">
		<head class="head">
			<Header :name="name" />
		</head>
		<main class="main">
			<Navbar />

			<router-view />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/base-ui/Header';
	import Navbar from '@/components/home/Navbar.vue';

	export default {
		name: 'Home',
		components: {
			Header,
			Navbar,
		},
		data: () => ({
			name: 'Swifty',
		}),
	};
</script>

<style scoped lang="scss">
	.home {
		height: 100%;
	}

	.head {
		position: relative;
		display: flex;
		margin-bottom: 59px;
	}

	.main {
	}
</style>
